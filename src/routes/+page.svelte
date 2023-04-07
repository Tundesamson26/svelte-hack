<script>
  import { Configuration, OpenAIApi } from "openai";

  let prompt;
  

  const configuration = new Configuration({
    organization: "org-e4LTVTBp1C2nhyRwB1ZHhKL8",
    apiKey: import.meta.env.VITE_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const fetchData = async () => {
    try {
      const response = await openai.createImage({
        prompt: "A cute baby sea otter",
        n: 2,
        size: "512x512",
      });
      console.log(response.data.data[0].url);
    } catch (err) {
      console.log(err);
    }
  };
</script>

<h1 class="text-3xl font-bold text-[#57534e] text-center my-7">
  Image Generator
</h1>
<div>
  <form action="" >
    <div class="flex justify-between w-full">
      <input
        type="text"
        placeholder="enter image description here..."
        on:change={(e)=> setPrompt(e.target.value)}
        class="block rounded-md w-screen border-0 py-1.5 ml-4 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button type="submit" on:click={fetchData} class="rounded-md text-[#57534e] font-semibold py-2 px-8 ml-5 mr-8 bg-orange-500">Generate</button>
    </div>
  </form>
</div>
<div>
  <img src="" alt="" />
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
