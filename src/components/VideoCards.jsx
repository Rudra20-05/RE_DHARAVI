'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// 5 Detailed Video Objects with distinct titles, speakers, and stylized overlays to match client videos
const VIDEOS = [
  {
    id: 1,
    title: 'Sector 6 SRA Notice: Matunga Railway Land',
    duration: '3:15',
    speaker: 'Official Announcement',
    videoUrl: '/videos/video1.mp4',
    description: 'An important update regarding the Dharavi Redevelopment Project has come to light. Under SRA, an official notice has been issued for the residents of Sector 6 Matunga, railway land. The process of giving eligible families permanent homes of 350 sq. ft., better facilities, and secure living has now moved forward. Construction is going to start soon, which is why residents have been requested to complete their rent agreements and vacate their premises. A dedicated facilitation center is also available for any help or information. Every Dharavikar\'s dream - our own permanent home.',
    category: 'Sector 6 Matunga',
    overlayText: null
  },
  {
    id: 2,
    title: 'Dharavi Redevelopment: The New Phase',
    duration: '2:45',
    speaker: 'Community Leader',
    videoUrl: '/videos/video2.mp4',
    description: 'The redevelopment process in Dharavi area is now moving fast in a new phase. Residents are actively participating in documentation and verification process, which is giving strong support to the project. Through every meeting and guidance session, families are being given complete information about the process. Is initiative ka main objective logon ko better housing, organised infrastructure aur secure future dena hai. Now people can see both faith and hope about the new Dharavi. This is not just redevelopment, but preparation for better tomorrow for every family. Every Dharavikar\'s dream is to own a home.',
    category: 'Redevelopment Process',
    overlayText: null
  },
  {
    id: 3,
    title: 'Documentation Drive: Sectors 2 & 3',
    duration: '3:30',
    speaker: 'Verification Officer',
    videoUrl: '/videos/video3.mp4',
    description: 'An important process is being organized for the residents of Sector 2 and Sector 3 on 18, 19 and 20 May. This initiative is considered to be a strong step towards development and better future of Dharavi. Residents are requested to reach on time with necessary documents and actively participate in this process. Complete guidance and answers to questions related to the process will be available there. Let\'s take a strong step towards Dharavi\'s new future.',
    category: 'Sector 2 & 3',
    overlayText: null
  },
  {
    id: 4,
    title: 'Survey Progress & Milestones',
    duration: '4:12',
    speaker: 'Field Representative',
    videoUrl: '/videos/video4.mp4',
    description: 'A new wave of change in Dharavi. People of Chawls, colonies and slum areas are taking part in surveys and documentation. So far survey of 91,321 houses has been completed, which shows people\'s faith. Every meeting is transparent and every voice is being listened carefully. This is not only development, but also a new and better Dharavi, everyone\'s support and development. Every Dharavikar\'s dream - own home.',
    category: 'Housing Survey',
    overlayText: null
  },
  {
    id: 5,
    title: 'Understanding Rights & Redressal',
    duration: '3:50',
    speaker: 'Rights Counselor',
    videoUrl: '/videos/video5.mp4',
    description: 'Many questions and discussions are going on among the people regarding Dharavi development. Is process ka main objective residents ko better housing aur organised infrastructure dena hai. Documentation and verification is being considered a very important step for future security. Every family\'s participation is making the redevelopment process more stronger. People are able to understand their rights only with the right information and proper guidance. It is important to understand the official process by staying away from rumors. New Dharavi is now slowly moving towards a new future. "Every Dharavikar\'s dream - our own home."',
    category: 'Rights & Guidance',
    overlayText: null
  }
];


export default function VideoCards() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [cardStack, setCardStack] = useState(VIDEOS);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor screen width for mobile card stack mode
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle Swipe logic: Move front card to the bottom of the stack
  const handleSwipe = (direction) => {
    setCardStack((prev) => {
      const copy = [...prev];
      const swipedCard = copy.shift();
      copy.push(swipedCard);
      return copy;
    });
  };

  return (
    <section 
      className="w-full nbt-row-padding overflow-hidden relative"
      style={{ backgroundColor: 'var(--nbt-dark)' }}
    >
      <div className="nbt-container">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <span 
            className="label-tag block mb-4"
            style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}
          >
            DOCUMENTARY VIDEO ARCHIVES
          </span>
          <h2 
            className="font-display m-0 text-white uppercase text-5xl md:text-7xl tracking-wide"
            style={{ letterSpacing: '0.04em' }}
          >
            Voice of Dharavi
          </h2>
          <div className="mt-4 mx-auto md:mx-0" style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} />
          <p className="text-gray-400 font-body text-sm mt-6 max-w-2xl mx-auto md:mx-0" style={{ letterSpacing: '0.02em' }}>
            {isMobile 
              ? 'Drag left or right to swipe through testimonies. Tap card to unmute. Bottom controls let you pause, adjust sound, or open full screen.' 
              : 'Explore cottage industries and oral histories. Cards play in an autoplay loop muted; hover over any card to unmute. Use controls to pause, adjust sound, or expand to full view.'}
          </p>
        </div>

        {isMobile ? (
          /* Mobile Tinder-Style Card Stack View */
          <div className="relative w-full max-w-[310px] h-[520px] mx-auto flex flex-col items-center justify-start select-none pt-4 pl-2 pr-10">
            <div className="relative w-full h-[450px]">
              {cardStack.slice(0, 4).reverse().map((video) => {
                // Determine stack index position (0: top, 1: second, etc.)
                const index = cardStack.findIndex(v => v.id === video.id);
                return (
                  <SwipableCard 
                    key={video.id} 
                    video={video} 
                    index={index} 
                    onSwipe={handleSwipe}
                    onFullView={() => setActiveVideo(video)}
                  />
                );
              })}
            </div>

            {/* Interactive programatic Swipe Button below the deck */}
            <button 
              onClick={() => {
                // Programmatically trigger a swipe-out transition by dispatching a custom swipe event
                const event = new CustomEvent('programmatic-swipe', { detail: { id: cardStack[0].id } });
                window.dispatchEvent(event);
              }}
              className="mt-6 bg-white/10 hover:bg-white/20 active:scale-95 border border-white/10 text-white rounded-full px-5 py-2 text-xs font-heading font-semibold tracking-wider transition-all flex items-center gap-2"
            >
              <span>Next Testimony</span>
              <svg className="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ) : (
          /* Desktop Grid View */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
            {cardStack.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onFullView={() => setActiveVideo(video)} 
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal 
            video={activeVideo} 
            onClose={() => setActiveVideo(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* Individual Video Card Component (Desktop Grid) */
function VideoCard({ video, onFullView }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [showDropdown, setShowDropdown] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Muted autoplay blocked initially:", err);
      });
    }
  }, []);

  // Sync volume state to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  // Card Mouse Hover (Unmute)
  const handleMouseEnter = () => {
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  // Card Mouse Leave (Mute)
  const handleMouseLeave = () => {
    setIsMuted(true);
    setShowDropdown(false); 
    setTilt({ x: 0, y: 0 }); 
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  // 3D Parallax Tilt Effect on Mouse Move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    setTilt({
      x: ((yc - y) / yc) * 6,
      y: -((xc - x) / xc) * 6
    });
  };

  // Explicit Play/Pause Toggle
  const handlePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Explicit Sound Button Click (Mute/Unmute toggle)
  const handleSoundToggle = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isMuted) {
      setIsMuted(false);
      videoRef.current.muted = false;
      if (volume === 0) setVolume(0.8);
    } else {
      setIsMuted(true);
      videoRef.current.muted = true;
    }
  };

  // Playback Speed Toggle
  const handleSpeedToggle = (e) => {
    e.stopPropagation();
    const speeds = [0.5, 1.0, 1.5, 2.0];
    const nextIndex = (speeds.indexOf(speed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIndex];
    setSpeed(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
  };

  // Picture-in-Picture mode
  const handlePiP = async (e) => {
    e.stopPropagation();
    setShowDropdown(false);
    try {
      if (videoRef.current) {
        if (document.pictureInPictureElement === videoRef.current) {
          await document.exitPictureInPicture();
        } else {
          await videoRef.current.requestPictureInPicture();
        }
      }
    } catch (err) {
      console.warn("PiP not supported or failed:", err);
    }
  };

  // Dynamic Stylized Subtitles
  const renderOverlayText = () => {
    if (!video.overlayText) return null;
    const { pre, main, sub, style } = video.overlayText;

    if (style === 'serif') {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-serif italic text-white/90 text-sm md:text-base tracking-wider lowercase">{pre}</span>
          <span className="font-serif font-semibold text-white text-3xl md:text-4xl leading-tight mt-1">{main}</span>
        </div>
      );
    }

    if (style === 'elegant-thin') {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-serif font-extralight tracking-[0.2em] text-white/80 text-lg md:text-xl capitalize">{main}</span>
        </div>
      );
    }

    if (style === 'yellow-blocky') {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-heading font-black tracking-tighter text-yellow-400 text-4xl md:text-5xl uppercase leading-none">{main}</span>
        </div>
      );
    }

    if (style === 'clean-white') {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-heading font-semibold text-white text-xl md:text-2xl tracking-normal">{main}</span>
        </div>
      );
    }

    if (style === 'tilted-yellow') {
      return (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 select-none z-10"
          style={{ transform: 'skewY(-6deg) rotate(-4deg)' }}
        >
          <span className="font-heading font-black tracking-tighter text-yellow-400 text-3xl md:text-4xl uppercase leading-none">{main}</span>
          {sub && <span className="font-heading font-extrabold tracking-tight text-white text-lg md:text-xl uppercase mt-1 leading-none">{sub}</span>}
        </div>
      );
    }

    if (style === 'huge-white') {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-heading font-black text-white text-6xl md:text-7xl lowercase tracking-tight leading-none opacity-90">{main}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={() => onFullView(video)}
      className="aspect-[9/16] relative overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-neutral-950 group cursor-pointer transition-all duration-300 hover:shadow-2xl"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out, border-color 0.3s ease, shadow 0.3s ease'
      }}
    >
      <video
        ref={videoRef}
        src={video.videoUrl}
        loop
        playsInline
        muted={isMuted}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />





      {/* CONTROL BAR ROW */}
      <div 
        className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/5 text-white transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handlePlayPause} 
          className="hover:scale-110 active:scale-95 text-white transition-transform focus:outline-none p-1 rounded-full hover:bg-white/10"
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        <div className="flex items-center gap-1.5 group/volume">
          <button 
            onClick={handleSoundToggle} 
            className="hover:scale-110 active:scale-95 text-white transition-transform focus:outline-none p-1 rounded-full hover:bg-white/10"
          >
            {isMuted || volume === 0 ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.03c1.37-.31 2.6-.95 3.63-1.85L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
            )}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setVolume(val);
              if (val > 0) {
                setIsMuted(false);
                if (videoRef.current) videoRef.current.muted = false;
              } else {
                setIsMuted(true);
                if (videoRef.current) videoRef.current.muted = true;
              }
            }}
            style={{
              background: `linear-gradient(to right, #fff ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%)`
            }}
            className="w-10 sm:w-12 h-1 accent-white rounded-lg appearance-none cursor-pointer hidden group-hover/volume:inline-block transition-all"
          />
        </div>

        <div className="flex-grow" />

        <button 
          onClick={() => onFullView(video)}
          className="hover:scale-110 active:scale-95 text-white transition-transform focus:outline-none p-1 rounded-full hover:bg-white/10"
          title="Full View"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

        <div className="relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
            className="hover:scale-110 active:scale-95 text-white transition-transform focus:outline-none p-1 rounded-full hover:bg-white/10"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>

          {showDropdown && (
            <div 
              className="absolute bottom-10 right-0 bg-neutral-900 border border-white/10 rounded-xl py-1.5 w-36 shadow-2xl z-30 flex flex-col overflow-hidden animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={handleSpeedToggle}
                className="flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 text-xs text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Speed: {speed}x</span>
              </button>

              <button 
                onClick={handlePiP}
                className="flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 text-xs text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0v9m0-9H8a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2z" />
                </svg>
                <span>Float Screen</span>
              </button>

              <a 
                href={video.videoUrl} 
                download={`video_${video.id}.mp4`}
                target="_blank" 
                rel="noreferrer"
                onClick={() => setShowDropdown(false)}
                className="flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 text-xs text-white transition-colors border-t border-white/5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download file</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* Swipable Card Component (Mobile Card Stack Mode) */
function SwipableCard({ video, index, onSwipe, onFullView }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [showDropdown, setShowDropdown] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [swipeDir, setSwipeDir] = useState(null);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0.4, 1, 1, 1, 0.4]);

  // Autoplay top card, pause behind cards
  useEffect(() => {
    if (videoRef.current) {
      if (index === 0) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => console.log("Autoplay block:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [index]);

  // Sync volume state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  // Bind programmatic swipe listener
  useEffect(() => {
    const handleProgrammaticSwipe = (e) => {
      if (e.detail.id === video.id && index === 0) {
        setSwipeDir('right');
      }
    };
    window.addEventListener('programmatic-swipe', handleProgrammaticSwipe);
    return () => window.removeEventListener('programmatic-swipe', handleProgrammaticSwipe);
  }, [video.id, index]);

  // Swipe dismissal on drag end
  const handleDragEnd = (event, info) => {
    if (index !== 0) return; // Only top card is swipeable
    const swipeThreshold = 100;
    if (info.offset.x > swipeThreshold) {
      setSwipeDir('right');
    } else if (info.offset.x < -swipeThreshold) {
      setSwipeDir('left');
    }
  };

  const handleAnimationComplete = () => {
    if (swipeDir) {
      onSwipe(swipeDir);
      setSwipeDir(null); // Reset
    }
  };

  // Play/Pause Click Handler
  const handlePlayPause = (e) => {
    e.stopPropagation();
    if (index !== 0 || !videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Sound Toggle Click Handler
  const handleSoundToggle = (e) => {
    e.stopPropagation();
    if (index !== 0 || !videoRef.current) return;
    if (isMuted) {
      setIsMuted(false);
      videoRef.current.muted = false;
      if (volume === 0) setVolume(0.8);
    } else {
      setIsMuted(true);
      videoRef.current.muted = true;
    }
  };

  // Tap Card to Unmute / Play sound
  const handleCardTap = () => {
    if (index !== 0) return;
    if (isMuted) {
      setIsMuted(false);
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
    } else {
      // Toggle play/pause on subsequent taps
      handlePlayPause({ stopPropagation: () => {} });
    }
  };

  // Speed Toggle Handler
  const handleSpeedToggle = (e) => {
    e.stopPropagation();
    const speeds = [0.5, 1.0, 1.5, 2.0];
    const nextSpeed = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    setSpeed(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
  };

  // Picture in Picture
  const handlePiP = async (e) => {
    e.stopPropagation();
    setShowDropdown(false);
    try {
      if (videoRef.current) {
        if (document.pictureInPictureElement === videoRef.current) {
          await document.exitPictureInPicture();
        } else {
          await videoRef.current.requestPictureInPicture();
        }
      }
    } catch (err) {
      console.warn("PiP not supported or failed:", err);
    }
  };

  // Render stylized text overlays
  const renderOverlayText = () => {
    if (!video.overlayText) return null;
    const { pre, main, sub, style } = video.overlayText;

    if (style === 'serif') {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-serif italic text-white/90 text-[11px] tracking-wider lowercase">{pre}</span>
          <span className="font-serif font-semibold text-white text-2xl leading-tight mt-1">{main}</span>
        </div>
      );
    }

    if (style === 'elegant-thin') {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-serif font-extralight tracking-[0.2em] text-white/85 text-base capitalize">{main}</span>
        </div>
      );
    }

    if (style === 'yellow-blocky') {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-heading font-black tracking-tighter text-yellow-400 text-3xl uppercase leading-none">{main}</span>
        </div>
      );
    }

    if (style === 'clean-white') {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-heading font-semibold text-white text-lg tracking-normal">{main}</span>
        </div>
      );
    }

    if (style === 'tilted-yellow') {
      return (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 select-none z-10"
          style={{ transform: 'skewY(-6deg) rotate(-4deg)' }}
        >
          <span className="font-heading font-black tracking-tighter text-yellow-400 text-2xl uppercase leading-none">{main}</span>
          {sub && <span className="font-heading font-extrabold tracking-tight text-white text-base uppercase mt-1 leading-none">{sub}</span>}
        </div>
      );
    }

    if (style === 'huge-white') {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-4 select-none z-10">
          <span className="font-heading font-black text-white text-5xl lowercase tracking-tight leading-none opacity-90">{main}</span>
        </div>
      );
    }

    return null;
  };

  // Stack styling metrics: Offset based on index
  const scale = 1 - index * 0.05;
  const targetX = index * 12; // shifts fanned out right
  const targetRotate = index * 3; // rotates clockwise fanning
  const zIndex = 30 - index;

  return (
    <motion.div
      drag={index === 0 ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
      onAnimationComplete={handleAnimationComplete}
      onClick={handleCardTap}
      animate={
        swipeDir 
          ? { x: swipeDir === 'right' ? 380 : -380, opacity: 0, rotate: swipeDir === 'right' ? 25 : -25 }
          : { scale, x: targetX, rotate: targetRotate, zIndex }
      }
      style={index === 0 ? { x, rotate, opacity } : {}}
      className={`absolute inset-0 w-full h-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-neutral-950 select-none ${
        index === 0 ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
      }`}
      transition={swipeDir ? { duration: 0.25 } : { type: 'spring', damping: 20, stiffness: 200 }}
    >
      {/* Autoplaying vertical video */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        loop
        playsInline
        muted={isMuted}
        className="w-full h-full object-cover pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45 pointer-events-none" />

      {/* Pulsing Speaker Slash Mute Badge on top card */}
      {index === 0 && isMuted && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md text-white rounded-full p-4 pointer-events-none animate-pulse flex flex-col items-center gap-1.5 z-20">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.03c1.37-.31 2.6-.95 3.63-1.85L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
          <span className="text-[9px] uppercase font-bold tracking-widest text-white/90">Tap to Unmute</span>
        </div>
      )}





      {/* CONTROL BAR ROW (Top card only) */}
      {index === 0 && (
        <div 
          className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/5 text-white"
          onClick={(e) => e.stopPropagation()} // Prevent card tap unmute when clicking buttons
        >
          {/* Play/Pause */}
          <button 
            onClick={handlePlayPause} 
            className="hover:scale-110 active:scale-95 text-white transition-transform focus:outline-none p-1 rounded-full hover:bg-white/10"
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Mute/Sound Slider */}
          <div className="flex items-center gap-1.5">
            <button 
              onClick={handleSoundToggle} 
              className="hover:scale-110 active:scale-95 text-white transition-transform focus:outline-none p-1 rounded-full hover:bg-white/10"
            >
              {isMuted || volume === 0 ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.03c1.37-.31 2.6-.95 3.63-1.85L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                </svg>
              )}
            </button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setVolume(val);
                if (val > 0) {
                  setIsMuted(false);
                  if (videoRef.current) videoRef.current.muted = false;
                } else {
                  setIsMuted(true);
                  if (videoRef.current) videoRef.current.muted = true;
                }
              }}
              style={{
                background: `linear-gradient(to right, #fff ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%)`
              }}
              className="w-10 h-1 accent-white rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex-grow" />

          {/* Full View */}
          <button 
            onClick={onFullView}
            className="hover:scale-110 active:scale-95 text-white transition-transform focus:outline-none p-1 rounded-full hover:bg-white/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>

          {/* 3 dots Dropdown */}
          <div className="relative">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(!showDropdown);
              }}
              className="hover:scale-110 active:scale-95 text-white transition-transform focus:outline-none p-1 rounded-full hover:bg-white/10"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>

            {showDropdown && (
              <div 
                className="absolute bottom-10 right-0 bg-neutral-900 border border-white/10 rounded-xl py-1.5 w-32 shadow-2xl z-30 flex flex-col overflow-hidden animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={handleSpeedToggle}
                  className="flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Speed: {speed}x</span>
                </button>

                <button 
                  onClick={handlePiP}
                  className="flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 text-xs text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0v9m0-9H8a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2z" />
                  </svg>
                  <span>Float Screen</span>
                </button>

                <a 
                  href={video.videoUrl} 
                  download={`video_${video.id}.mp4`}
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center gap-2 px-3 py-2 text-left hover:bg-white/10 text-xs text-white border-t border-white/5 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download file</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* Lightbox Modal Component */
function VideoModal({ video, onClose }) {
  const modalVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [progress, setProgress] = useState(0);

  // Disable body scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Close modal on Escape key press, Toggle play on Spacebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  // Sync volume and mute states
  useEffect(() => {
    if (modalVideoRef.current) {
      modalVideoRef.current.volume = volume;
      modalVideoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Track video progress
  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      const current = modalVideoRef.current.currentTime;
      const duration = modalVideoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = clickPercentage * modalVideoRef.current.duration;
    }
  };

  const togglePlay = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSpeedChange = () => {
    const speeds = [0.5, 1.0, 1.5, 2.0];
    const nextSpeed = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    setSpeed(nextSpeed);
    if (modalVideoRef.current) {
      modalVideoRef.current.playbackRate = nextSpeed;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      {/* Main Player Box */}
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side: Video Player */}
        <div className="flex-1 bg-black relative flex items-center justify-center min-h-[350px] md:min-h-0">
          <video
            ref={modalVideoRef}
            src={video.videoUrl}
            loop
            playsInline
            autoPlay
            onTimeUpdate={handleTimeUpdate}
            className="h-full max-h-[50vh] md:max-h-[75vh] w-auto aspect-[9/16] object-cover"
          />

          {/* Progress Bar */}
          <div 
            onClick={handleProgressBarClick}
            className="absolute bottom-16 left-6 right-6 h-1.5 bg-white/20 rounded-full cursor-pointer hover:h-2 transition-all z-20 group"
          >
            <div 
              style={{ width: `${progress}%` }}
              className="h-full bg-yellow-400 rounded-full relative"
            >
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Overlay Controls */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-4">
              <button 
                onClick={togglePlay}
                className="hover:text-yellow-400 active:scale-95 transition-all p-1"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              <button 
                onClick={toggleMute}
                className="hover:text-yellow-400 active:scale-95 transition-all p-1"
              >
                {isMuted || volume === 0 ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.03c1.37-.31 2.6-.95 3.63-1.85L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                  </svg>
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setVolume(val);
                  if (val > 0) setIsMuted(false);
                }}
                style={{
                  background: `linear-gradient(to right, #fff ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%)`
                }}
                className="w-16 h-1 accent-white rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={handleSpeedChange}
                className="text-xs font-mono font-semibold hover:text-yellow-400 bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
              >
                Speed: {speed}x
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Information Sidebar */}
        <div className="w-full md:w-[320px] p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-neutral-900 text-white overflow-hidden max-h-[45vh] md:max-h-none">
          <div className="overflow-y-auto no-scrollbar pr-2 mb-6 flex-1 min-h-0">
            <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest block mb-2">
              {video.category}
            </span>
            <h3 className="font-heading font-bold text-xl leading-tight mb-2">
              {video.title}
            </h3>
            <p className="font-body text-xs text-white/50 mb-6 uppercase tracking-wider">
              Testimony by: <strong className="text-white">{video.speaker}</strong>
            </p>
            <div className="w-12 h-[2px] bg-yellow-400 mb-6" />
            <p className="font-body text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
              {video.description}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href={video.videoUrl}
              download={`video_${video.id}.mp4`}
              target="_blank" 
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-xs py-3 px-4 rounded-xl transition-all font-heading"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download High-Res MP4</span>
            </a>

            <button 
              onClick={onClose}
              className="w-full border border-white/10 hover:bg-white/5 text-white font-semibold text-xs py-3 px-4 rounded-xl transition-all font-heading"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </motion.div>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 bg-black/50 text-white hover:text-yellow-400 hover:bg-black/75 p-3 rounded-full transition-all focus:outline-none z-50 border border-white/10"
        title="Close (Esc)"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
}
