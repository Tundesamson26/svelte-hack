// import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const imgs = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-e4LTVTBp1C2nhyRwB1ZHhKL8/user-fVk8kO2uHbVysumf0AfU26o2/img-rkDsUfv400QxPQn8KKvLSjNi.png?st=2023-04-01T20%3A30%3A51Z&se=2023-04-01T22%3A30%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-01T18%3A15%3A39Z&ske=2023-04-02T18%3A15%3A39Z&sks=b&skv=2021-08-06&sig=%2BXIyjN71FeTUQxOGimiSGerSL4Jos5THjuo/EbbbRj8%3D";

const {subscribe, set, update} = writable(imgs);

// export const addImage = (image) => update(images => {
    
// });

const reset = () => {
    set(imgs);
};

export default {
    subscribe,
    // addImage,
    reset
}