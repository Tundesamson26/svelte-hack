import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../chunks/index.js";
import { Configuration, OpenAIApi } from "openai";
const Button_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-va7caj{background-color:#f76027;color:white;border:none;border-radius:4px;padding:0.5rem;margin:5px;text-transform:uppercase}img.svelte-va7caj{width:16px}body.dark-mode button.svelte-va7caj{background-color:#0084f6;color:white}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<button class="svelte-va7caj"><img src="/toggle.png" alt="" class="svelte-va7caj">
        ${slots.default ? slots.default({}) : ``}
    </button>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-color:#f3f4f6}body.dark-mode{background-color:#1d3040;color:#bfc2c7}.svelte-14u80fo:img-container{width:512;height:512}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prompt = "";
  let image = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-e4LTVTBp1C2nhyRwB1ZHhKL8/user-fVk8kO2uHbVysumf0AfU26o2/img-7WZ8GCtAfWDs7LjSFd9H3sBe.png?st=2023-04-15T06%3A43%3A14Z&se=2023-04-15T08%3A43%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-15T02%3A44%3A27Z&ske=2023-04-16T02%3A44%3A27Z&sks=b&skv=2021-08-06&sig=XhuL%2BjzSqnPu8Zk47L8LLBEJrjoiZ8VpX327bHQq87Y%3D";
  const configuration = new Configuration({
    organization: "org-e4LTVTBp1C2nhyRwB1ZHhKL8",
    apiKey: "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"
  });
  new OpenAIApi(configuration);
  $$result.css.add(css);
  return `<div class="svelte-14u80fo">${validate_component(Button, "Button").$$render($$result, {}, {}, {})}
  <h1 class="text-3xl font-bold text-[#57534e] text-center my-7 svelte-14u80fo">Image Generator
  </h1></div>

<div class="svelte-14u80fo"><div class="flex justify-center items-center w-full svelte-14u80fo"><input type="text" placeholder="Enter image description here..."${add_attribute("value", prompt, 0)} class="block rounded-md w-[512px] h-[45px] border-0 py-1.5 ml-5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 svelte-14u80fo">
    <button type="submit" class="rounded-md text-[#f0ebe6] font-semibold py-2 px-8 ml-5 mr-8 bg-orange-500 svelte-14u80fo">Generate
    </button></div>
  <div class="flex justify-center items-center pt-6 rounded-md img-container svelte-14u80fo">${`<img class="rounded-md m-1 svelte-14u80fo"${add_attribute("src", image, 0)} alt="">`}</div>
</div>`;
});
export {
  Page as default
};
