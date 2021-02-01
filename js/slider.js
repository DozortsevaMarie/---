export class Slider{
	constructor(options){
		this.sliderContainer = options.sliderContainer
		this.itemsContainer = options.itemsContainer
		this.prevBtn = options.prevBtn
		this.nextBtn = options.nextBtn
		this.size = this.itemsContainer[0].clientWidth
		this.counter = 0
		this.value = options.value
		this.length = this.itemsContainer.length - this.value
	}
	
	moveLeft(){
		this.prevBtn.addEventListener('click', () =>{
		this.sliderContainer.style.transition = 'transform 0.4s ease-in-out';
		--this.counter;
		if(this.counter < 0 ) {
			this.prevBtn.classList.add('hidden');
			this.counter = 0;
			return;
		}
		else if(this.counter < this.length) {
			this.nextBtn.classList.remove('hidden');
		}
		this.sliderContainer.style.transform = 'translateX('+ (-this.size) * this.counter + 'px)';	
		});
	}
	moveRight(){
		this.nextBtn.addEventListener('click', ()=>{
		this.sliderContainer.style.transition = 'transform 0.4s ease-in-out';
		++this.counter;
		if (this.counter >= this.length){
			this.nextBtn.classList.add('hidden');
		}
		else if(this.counter > 0) {
			this.prevBtn.classList.remove('hidden');
		}
		this.sliderContainer.style.transform = 'translateX('+ (-this.size) * this.counter + 'px)';
		})
	}

	changeIconBackground(arr){
		arr.map((item) =>{
			item.addEventListener('click', (event) =>{
				if(event.target == item || event.target == item.firstElementChild){
					item.firstElementChild.classList.toggle('checked');
					item.classList.toggle('active');
				}
			});
		})
	}

	changeIcon(arr){
		arr.map((item) =>{
			item.addEventListener('click', (event) =>{
				if(event.target == item){
					item.classList.toggle('checked');
				}
			});
		})
	}
}