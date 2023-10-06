export const getYoutubeVideoId = (url: string) => {
	const match = url.match(
		/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)$/
	);

	if (match) {
		return match[1];
	}

	return null;
};
