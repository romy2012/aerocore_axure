import React from 'react';
import { Search } from 'lucide-react';
import Card from '../components/Card';

const CATEGORIES = ['RPG', '动作', '射击', '策略', '模拟', '体育'];

const Discovery = () => {
    return (
        <div style={{ padding: '16px' }}>
            {/* Header */}
            <h1 style={{ fontSize: '24px', color: 'var(--text-white)', marginBottom: '20px' }}>发现</h1>

            {/* Search Bar */}
            <div style={{
                backgroundColor: '#222',
                borderRadius: '20px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '24px'
            }}>
                <Search size={18} color="var(--text-light)" />
                <input
                    type="text"
                    placeholder="搜索游戏、资讯..."
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '14px',
                        width: '100%'
                    }}
                />
            </div>

            {/* Categories */}
            <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '16px' }}>热门分类</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '32px'
            }}>
                {CATEGORIES.map(cat => (
                    <div key={cat} style={{
                        backgroundColor: '#2A2A2A',
                        color: 'var(--text-primary)',
                        textAlign: 'center',
                        padding: '12px',
                        borderRadius: '8px',
                        fontSize: '14px'
                    }}>
                        {cat}
                    </div>
                ))}
            </div>

            {/* Featured */}
            <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '16px' }}>编辑精选</h2>
            <Card title="赛博朋克 2077：往日之影" category="编辑精选" meta="9.5分" />
            <Card title="博德之门3" category="年度最佳" meta="9.8分" />
        </div>
    );
};

export default Discovery;
