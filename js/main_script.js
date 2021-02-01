import {Slider} from '../js/slider.js'

const categoryList = document.querySelector('.category');
const categoryListItem = document.querySelectorAll('.category__name');
const categoryButton = document.querySelector('.search__submenu');
let searchOption = document.querySelector('.search__option');
const searchSubmenuLink = document.querySelector('.search__link');
const arrow = document.querySelector('.fas');
const backdrop = document.querySelector('.backdrop');
const shoppingIcons = Array.from(document.querySelectorAll('.shopping-cart-container'));
const shoppingCarts = Array.from(document.querySelectorAll('.item-description-icons__shopping-cart'));
const heartButtons = Array.from(document.querySelectorAll('.item-description-icons__heart'));
const balanceIcons = Array.from(document.querySelectorAll('.item-description-icons__balance'));
const sidebarSidemenu = document.querySelector('.sidebar-submenu');
const categoryItems = Array.from(document.querySelectorAll('.goods-categories__link'));
const goodsPage = document.getElementById('goods_page');
const pageTitle = document.getElementById('page-title');
const mainMenu = document.querySelector('.categories-container');


function changeIconBackground(arr){
		arr.map((item) =>{
			item.addEventListener('click', (event) =>{
				if(event.target == item || event.target == item.firstElementChild){
					item.firstElementChild.classList.toggle('checked');
					item.classList.toggle('active');
				}
			});
		})
	}

changeIconBackground(shoppingIcons);

function changeIcon(arr){
		arr.map((item) =>{
			item.addEventListener('click', (event) =>{
				if(event.target == item){
					item.classList.toggle('checked');
				}
			});
		})
	}

changeIcon(heartButtons);
changeIcon(balanceIcons);

function changeArrow(arrow){
	if (!arrow.classList.contains('fa-angle-up')){
		arrow.classList.remove('fa-angle-down');
		arrow.classList.add('fa-angle-up');
	}
	else {
		arrow.classList.remove('fa-angle-up');
		arrow.classList.add('fa-angle-down');
	}
}


function clickHandler(e){
	const {type} = e.target.dataset;
	console.log(type)
	if (type === 'backdrop'){
		categoryList.classList.remove('active');
		backdrop.style.display = 'none';
		arrow.classList.add('fa-angle-down');
		arrow.classList.remove('fa-angle-up');
	}
	else if (type === 'select' || type ==='select-link'){
		backdrop.style.display = 'block';
		backdrop.style.zIndex = '3';
		categoryButton.style.zIndex = '0';
		arrow.classList.remove('fa-angle-down');
		arrow.classList.add('fa-angle-up');
	}
}


backdrop.addEventListener('click', clickHandler);

categoryButton.addEventListener('click', () =>{
	categoryList.classList.toggle('active')
	changeArrow(arrow);
	clickHandler(event);
});

Array.from(categoryListItem).map(item => {
	item.addEventListener('click', e => {
		searchOption.innerHTML = e.target.innerHTML;
	});
});

const popularGoodsSlider = new Slider({
	sliderContainer: document.querySelector('.popular-goods__slider-container'),
	itemsContainer: Array.from(document.querySelectorAll('.p-g-item-container')),
	prevBtn: document.getElementById('p-g-arrow-left'),
	nextBtn: document.getElementById('p-g-arrow-right'),
	value: 4,
});

popularGoodsSlider.moveRight();
popularGoodsSlider.moveLeft();

const watchedGoodsSlider = new Slider({
	sliderContainer: document.querySelector('.watched-goods__slider-container'),
	itemsContainer: Array.from(document.querySelectorAll('.w-g-item-container')),
	prevBtn: document.getElementById('w-g-arrow-left'),
	nextBtn: document.getElementById('w-g-arrow-right'),
	value: 6,	
})

watchedGoodsSlider.moveLeft();
watchedGoodsSlider.moveRight();

const recomendedGoodsSlider = new Slider({
	sliderContainer: document.querySelector('.recomended-goods__slider-container'),
	itemsContainer: Array.from(document.querySelectorAll('.r-g__item-container')),
	prevBtn: document.getElementById('r-g-arrow-left'),
	nextBtn: document.getElementById('r-g-arrow-right'),
	value: 3,	
})

recomendedGoodsSlider.moveLeft();
recomendedGoodsSlider.moveRight();

function changeInnerHTML(arr, element) {
	arr.map(item => {
		item.addEventListener('click', e => {
		element.innerHTML = e.target.innerHTML;
		}); 
	})
}

changeInnerHTML(categoryItems, goodsPage);
changeInnerHTML(categoryItems, pageTitle);

function Appear(arr, element1, element2){
	arr.map(item =>{
		item.addEventListener('click', () =>{
			element1.classList.add('active');
			element2.style.zIndex = '4';
			backdrop.style.display = 'block';
			backdrop.style.zIndex = '3';
		})
	})
}

 
function Hide(e){
	const {type} = e.target.dataset;
	if (type === 'backdrop'){
		backdrop.style.display = 'none';
		backdrop.style.zIndex = '0';
		sidebarSidemenu.classList.remove('active');
		mainMenu.style.zIndex = '0';
	}
}

Appear(categoryItems, sidebarSidemenu, mainMenu);
backdrop.addEventListener('click', Hide);


