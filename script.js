function createNode(element)
{
	return document.createElement(element);
}

function append(parent,el)
{
	return parent.appendChild(el);
}

const ul = document.getElementById('authors'); 

const url = 'https://randomuser.me/api/?results=10';

fetch(url)  
.then((resp) => resp.json())  // Transform data into json
.then(function(data){
	let authors = data.results;
	
	return authors.map(function(author){
		
		let li = createNode('li'),
		    img = createNode('img'),
		    span = createNode('span')
			mail = createNode('mail');
			cities = createNode('cities');
		
		img.src = author.picture.medium;
		
		span.innerHTML = `${author.name.first} 
		${author.name.last}`;
		
		mail.innerHTML = `${author.email}`;
		
		cities.innerHTML = `${author.location.city}`;

		append(li,img);
		append(li,span);
		append(li,cities);
		append(li,mail);
		append(ul,li);
	})

})	

.catch(function(error){
    console.log(error);
});