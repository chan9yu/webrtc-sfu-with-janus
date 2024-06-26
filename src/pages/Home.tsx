import { useEffect, useRef } from 'react';
import { AppService } from '../services/AppService';

const appService = AppService.getInstance();

export default function HomePage() {
	const containerRef = useRef<HTMLDivElement>(null);

	const handleConnectJanus = () => {
		appService.connectJanus();
	};

	const handleCreateRoom = () => {
		appService.createRoom();
	};

	const handleJoinRoom = () => {
		appService.joinRoom('옥분이');
	};

	useEffect(() => {
		appService.videoElements.forEach(videoElement => {
			containerRef.current && containerRef.current.appendChild(videoElement);
		});
	}, []);

	return (
		<div className="container">
			<h1>Janus 1:n Video Room TEST</h1>
			<div ref={containerRef} className="video_wrapper" />
			<button onClick={handleConnectJanus}>1. connectJanus</button>
			<br />
			<button onClick={handleCreateRoom}>3. create Room</button>
			&nbsp;
			<button onClick={handleJoinRoom}>4. join Room</button>
		</div>
	);
}
