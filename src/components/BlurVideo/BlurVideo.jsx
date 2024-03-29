import { useState } from "react";
import youtube from "../../img/youtube.png";
import close from "../../icons/x.svg";
import "./BlurVideo.css";
import video from "../../video/video-hero.mp4";

export function BlurVideo() {
	const [isOpen, setIsOpen] = useState(false);

	const openDialog = () => {
		setIsOpen(true);
		// stop scroll
		document.body.style.overflow = "hidden";
		console.log("open");
	};
	const closeDialog = () => {
		setIsOpen(false);
		// enable scroll
		document.body.style.overflow = "auto";
	};

	return (
		<article className="absolute w-full h-full max-w-full m-auto">
			<h5>
				<a
					href="https://www.youtube.com/@maikofpv"
					target="_blank"
					class="absolute inset-0 top-[16rem] md:top-[13vh] text-[#09f] text-2xl font-bold hover:scale-105 z-10 w-fit h-fit mx-auto transition">
					<h4>Disfruta mis videos en YouTube</h4>
					<hr className="hr" />
				</a>
			</h5>
			<video
				className=" absolute right-0 left-0 bottom-0 top-0 m-auto rounded-3xl px-2  app-video md:max-w-[50%] z-20"
				src={video}
				loop
				muted
				autoPlay></video>
			<button onClick={openDialog}>
				<img
					src={youtube.src}
					className="absolute top-0 bottom-0 left-0 right-0 m-auto youtube"
					alt="logo youtube"
				/>
			</button>
			{isOpen && (
				<dialog open className="z-50 ">
					<iframe
						className="m-auto w-full p-1 md:w-[50%] aspect-video rounded-3xl shadow-2xl relative"
						src="https://www.youtube.com/embed/fv2hsVDW-fU?si=pAw1x73-DRnvHlCO&autoplay=1"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>

					<button
						className=" fixed top-5 w-10 mx-auto z-50"
						onClick={closeDialog}>
						<img
							src={close.src}
							alt="close button"
							className="close-button"
						/>
					</button>
				</dialog>
			)}
		</article>
	);
}
