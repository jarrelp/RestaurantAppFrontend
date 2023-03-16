import React, { useState } from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { withSize } from 'react-sizeme';
import TopBar from './TopBar';
import Widget from './Widget';
import LineChart from './customcharts/LineChart';
import AreaChart from './customcharts/AreaChart';
import BarChart from './customcharts/BarChart';
import ScatterChart from './customcharts/ScatterChart';

const originalItems = ['a', 'b', 'c', 'd', 'e', 'f'];

const initialLayouts = {
    lg: [
        { w: 6, h: 6, x: 0, y: 0, i: 'a', moved: false, static: false },
        { w: 6, h: 6, x: 6, y: 0, i: 'b', moved: false, static: false },
        { w: 6, h: 6, x: 6, y: 6, i: 'c', moved: false, static: false },
        { w: 6, h: 6, x: 12, y: 6, i: 'd', moved: false, static: false },
        { w: 6, h: 6, x: 12, y: 12, i: 'e', moved: false, static: false },
        { w: 6, h: 6, x: 18, y: 12, i: 'f', moved: false, static: false }
    ]
};

const componentList = {
    a: LineChart,
    b: AreaChart,
    c: BarChart,
    d: ScatterChart,
    e: LineChart,
    f: BarChart
};

function Content({ size: { width } }) {
    const [items, setItems] = useState(originalItems);
    const [layouts, setLayouts] = useState(getFromLS('layouts') || initialLayouts);
    const onLayoutChange = (_, allLayouts) => {
        setLayouts(allLayouts);
    };
    const onLayoutSave = () => {
        saveToLS('layouts', layouts);
    };
    const onRemoveItem = (itemId) => {
        setItems(items.filter((i) => i !== itemId));
    };
    const onAddItem = (itemId) => {
        setItems([...items, itemId]);
    };

    return (
        <>
            <TopBar
                onLayoutSave={onLayoutSave}
                items={items}
                onRemoveItem={onRemoveItem}
                onAddItem={onAddItem}
                originalItems={originalItems}
            />
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={60}
                width={width}
                onLayoutChange={onLayoutChange}
            >
                {items.map((key) => (
                    <div key={key} className="widget" data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}>
                        <Widget id={key} onRemoveItem={onRemoveItem} component={componentList[key]} />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </>
    );
}

export default withSize({ refreshMode: 'debounce', refreshRate: 60 })(Content);

function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
        } catch (e) {}
    }
    return ls[key];
}

function saveToLS(key, value) {
    if (global.localStorage) {
        global.localStorage.setItem(
            'rgl-8',
            JSON.stringify({
                [key]: value
            })
        );
    }
}
