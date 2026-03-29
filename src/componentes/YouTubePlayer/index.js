import React, { useState } from 'react';
import './style.css';

// The YouTube video ID is extracted from a URL or passed directly.
// Thumbnail is fetched from YouTube's public image CDN — no API key needed.
const YouTubePlayer = ({ videoId, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`;

    const handlePlay = () => setIsPlaying(true);

    return (
        <div className="yt-player-wrapper">
            {!isPlaying ? (
                <div className="yt-thumbnail-container" onClick={handlePlay}>
                    {/* Real YouTube thumbnail */}
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        className="yt-thumbnail"
                        onError={(e) => { e.target.src = fallbackThumbnail; }}
                    />

                    {/* Dark gradient overlay */}
                    <div className="yt-overlay" />

                    {/* Animated Play Button */}
                    <div className="yt-play-btn" aria-label="Reproduzir vídeo">
                        <div className="yt-play-ripple" />
                        <div className="yt-play-ripple delay" />
                        <div className="yt-play-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* YouTube badge */}
                    <div className="yt-badge">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                    </div>

                    {/* Bottom title bar */}
                    <div className="yt-title-bar">
                        <span>{title}</span>
                        <span className="yt-duration-hint">Clique para assistir</span>
                    </div>
                </div>
            ) : (
                <div className="yt-iframe-container">
                    <iframe
                        src={embedUrl}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
};

export default YouTubePlayer;
