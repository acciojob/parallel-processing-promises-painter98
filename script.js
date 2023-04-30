//your JS code here. If required.
let images = [
	'https://tse1.mm.bing.net/th?id=OIP._4MayEo24uOqL16nY5gp0gHaE8&pid=Api&P=0',
	'https://tse2.mm.bing.net/th?id=OIP.jIGSidW76D_vlYcaeSCbVwHaEo&pid=Api&P=0',
	'https://tse1.mm.bing.net/th?id=OIP.RYDJeNBXkSnl4zsmaLSwTQHaEZ&pid=Api&P=0'
]; //urls of images

document.getElementById('download-images-button').addEventListener('click',(event)=>{

	let promises = images.map((url)=>{ //creating promise for each of the image url
		return new Promise((resolve,reject) => {
			let img = new Image();//getting image 

			img.onload = () => resolve(img);
			img.onerror = () => reject(`Failed to load image's URL: ${url}`);
			img.src = url;
	});
	});

	Promise.all(promises).then(images => {
		images.forEach((image) => {
			document.getElementById('output').appendChild(image);
		});
	}).catch(error => {
		console.log(`there is an ${error}`);
	});
});