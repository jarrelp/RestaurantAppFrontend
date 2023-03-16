import { useState } from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { withSize } from 'react-sizeme';
import ToolBox from './ToolBox';
import Widget from './Widget';
import SpeedDialComponent from './SpeedDialComponent';
import { ComponentListData, OriginalItems, InitialLayouts } from './data/ComponentsListData';

const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

function Content({ size: { width } }) {
    const [items, setItems] = useState(OriginalItems);
    const [toolBoxItems, setToolBoxItems] = useState([]);
    const [layouts, setLayouts] = useState(getFromLS('layouts') || InitialLayouts);
    const [showToolBox, setShowToolBox] = useState(false);
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
    const onRemoveToolBoxItem = (itemId) => {
        setToolBoxItems(toolBoxItems.filter((i) => i !== itemId));
    };
    const onAddToolBoxItem = (itemId) => {
        setToolBoxItems([...toolBoxItems, itemId]);
    };

    const onTakeItem = (itemId) => {
        onRemoveItem(itemId);
        onAddToolBoxItem(itemId);
    };

    const onPutItem = (itemId) => {
        onRemoveToolBoxItem(itemId);
        onAddItem(itemId);
    };

    return (
        <div>
            {showToolBox ? (
                <ToolBox items={toolBoxItems} onRemoveItem={onRemoveItem} onAddItem={onPutItem} componentListData={ComponentListData} />
            ) : null}
            <SpeedDialComponent onLayoutSave={onLayoutSave} onToggleToolBox={() => setShowToolBox(!showToolBox)} />
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={cols}
                rowHeight={60}
                width={width}
                onLayoutChange={onLayoutChange}
            >
                {items.map((key) => (
                    <div
                        key={key}
                        className="widget"
                        data-grid={{
                            w: 2,
                            h: 3,
                            x: (items.length * 2 - 2) % (cols.md || 12),
                            y: Infinity
                        }}
                    >
                        <Widget
                            id={key}
                            onRemoveItem={onTakeItem}
                            onAddItem={onPutItem}
                            component={ComponentListData[key]}
                            isInToolbox={false}
                        />
                    </div>
                ))}
            </ResponsiveGridLayout>
        </div>
    );
}

export default withSize({ refreshMode: 'debounce', refreshRate: 60 })(Content);

function getFromLS(key) {
    let ls = [];
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem('rgl-8') ?? '') || {};
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
