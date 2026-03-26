import React from 'react';
import { Settings, ChevronRight } from 'lucide-react';

const Mine = () => {
    return (
        <div style={{ padding: '16px' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '10px'
            }}>
                <Settings color="var(--text-primary)" />
            </div>

            {/* Profile Card */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px'
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--img-placeholder)',
                    border: '2px solid var(--color-accent)'
                }}></div>
                <div>
                    <div style={{ fontSize: '20px', color: 'var(--text-white)', fontWeight: 'bold' }}>Romy Gamer</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Lv. 12 Explorer</div>
                </div>
            </div>

            {/* Stats */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '32px',
                padding: '16px 0',
                backgroundColor: '#1A1A1A',
                borderRadius: '12px'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-accent)', fontSize: '18px', fontWeight: 'bold' }}>24</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '12px', marginTop: '4px' }}>游戏</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-accent)', fontSize: '18px', fontWeight: 'bold' }}>142</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '12px', marginTop: '4px' }}>时长(h)</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-accent)', fontSize: '18px', fontWeight: 'bold' }}>8</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '12px', marginTop: '4px' }}>成就</div>
                </div>
            </div>

            {/* Menu List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['我的收藏', '浏览历史', '消息通知', '帮助与反馈'].map(item => (
                    <div key={item} style={{
                        padding: '16px 0',
                        borderBottom: '1px solid #222',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'var(--text-primary)',
                        fontSize: '16px'
                    }}>
                        <span>{item}</span>
                        <ChevronRight size={18} color="var(--text-light)" />
                    </div>
                ))}
            </div>

            {/* Logout Button */}
            <button className="btn-primary" style={{ marginTop: '40px', width: '100%' }}>
                退出登录
            </button>
        </div>
    );
};

export default Mine;
