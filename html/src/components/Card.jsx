import React from 'react';

const Card = ({ image, title, category, meta }) => {
    return (
        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
                backgroundColor: 'var(--img-placeholder)',
                borderRadius: 'var(--img-radius)',
                paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--img-border)'
            }}>
                {image && (
                    <img
                        src={image}
                        alt={title}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                )}
            </div>

            <div style={{ padding: '0 4px' }}>
                <div style={{
                    color: 'var(--list-title)',
                    fontSize: '16px',
                    fontWeight: '500',
                    marginBottom: '6px',
                    lineHeight: '1.4'
                }}>
                    {title || "文章/视频标题占位符"}
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'var(--list-category)',
                    fontSize: '12px'
                }}>
                    <span>{category || "分类标签"}</span>
                    <span>{meta || "刚刚"}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
