import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const data = ""

export const images = writable(data);

images.subscribe((value) =>{
    if(browser){
        localStorage.setItem('art-list', JSON.stringify(value))
    }
})