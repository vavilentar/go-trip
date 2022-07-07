const menuItems = document.querySelectorAll('.list_item');
const categoryList = document.querySelectorAll('.category');
const itemImages = document.querySelectorAll('.tab_img')

menuItems.forEach((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		menuItems.forEach(item => {
			item.classList.remove('list_item-active')
		})
			item.classList.add('list_item-active')
			showCategory(item.id);
	})
})

function showCategory (id) {
	categoryList.forEach((item) => {
		item.classList.remove('category-active')
	})
	categoryList[id-1].classList.toggle('category-active')
}

itemImages.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		item.classList.toggle('tab-img_zoom')
	})
})

//item.classList.toggle('list_item-active');
//list_item-active