import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const data = browser ? JSON.parse(window.localStorage.getItem('art-list') || "{}") ?? [] : [];

export const arts = writable(data);

arts.subscribe((value) =>{
    if(browser){
        localStorage.setItem('art-list', JSON.stringify(value))
    }
})