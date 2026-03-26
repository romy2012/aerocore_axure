import React, { useState } from 'react';
import Card from '../components/Card';

const TABS = ['关注', '推荐', '资讯', '视频'];

const Home = () => {
    const [activeTab, setActiveTab] = useState('推荐');

    return (
        <div style={{ padding: '16px' }}>
            {/* Top Tabs */}
            <div style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '24px',
                overflowX: 'auto',
                paddingBottom: '8px'
            }}>
                {TABS.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '18px',
                            fontWeight: activeTab === tab ? '600' : '400',
                            color: activeTab === tab ? 'var(--tab-text-active)' : 'var(--tab-text-default)',
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Feed */}
            <div>
                <Card title="Steam Deck OLED 深度评测：掌机新标杆" category="深度评测" meta="2小时前" />
                <Card title="Aerocore系统 2.0 更新日志" category="系统更新" meta="5小时前" />
                <Card title="本周独立游戏推荐：星之海" category="游戏推荐" meta="1天前" />
                <Card title="如何优化你的掌机续航？" category="玩机技巧" meta="2天前" />
            </div>
        </div>
    );
};

export default Home;
