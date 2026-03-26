import React from 'react';

const Console = () => {
    return (
        <div style={{ padding: '16px' }}>
            <h1 style={{ fontSize: '24px', color: 'var(--text-white)', marginBottom: '24px' }}>我的主机</h1>

            <div style={{
                backgroundImage: 'var(--gradient-main)',
                borderRadius: '16px',
                padding: '24px',
                color: 'white',
                marginBottom: '24px'
            }}>
                <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '4px' }}>设备名称</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Aerocore Pro</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                        <div style={{ fontSize: '12px', opacity: 0.8 }}>存储空间</div>
                        <div style={{ fontSize: '16px', fontWeight: 600 }}>512 GB / 1 TB</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', opacity: 0.8 }}>电池健康</div>
                        <div style={{ fontSize: '16px', fontWeight: 600 }}>98%</div>
                    </div>
                </div>
            </div>

            <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '16px' }}>快捷工具</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['性能监控', '按键映射', '系统更新', '网络设置'].map(item => (
                    <div key={item} style={{
                        padding: '16px',
                        backgroundColor: '#1E1E1E',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'var(--text-primary)'
                    }}>
                        <span>{item}</span>
                        <span style={{ color: 'var(--text-light)' }}>{'>'}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Console;
