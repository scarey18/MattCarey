import json from "../content/photos.json"


export default function matchImagesToPhotos(images) {
	const regex = /src\/images\/(.+\.\w{3,4})/;
	const namesList = [];
	const photos = [];

	json.photos.forEach((photo, i) => {
		const originalName = photo.image.match(regex)[1];
		if (!namesList.includes(originalName)) {
			namesList.push(originalName);
			const image = images.find(
				edge => edge.node.fluid.originalName === originalName
			)
			photos.push({
				id: i,
				description: photo.description,
				fluid: image.node.fluid,
			})
		}
	})

	return photos;
}