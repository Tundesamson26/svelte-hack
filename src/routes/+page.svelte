<script>
  // @ts-nocheck
  // @ts-ignore
  import { Configuration, OpenAIApi } from "openai";
  import Button from "./Button.svelte";

  //prompt state
  let prompt = "";
  const setPrompt = (/** @type {{ target: { value: string; }; }} */ e) => {
    prompt = e.target.value;
  };

  //image state
  let image = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-e4LTVTBp1C2nhyRwB1ZHhKL8/user-fVk8kO2uHbVysumf0AfU26o2/img-7WZ8GCtAfWDs7LjSFd9H3sBe.png?st=2023-04-15T06%3A43%3A14Z&se=2023-04-15T08%3A43%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-15T02%3A44%3A27Z&ske=2023-04-16T02%3A44%3A27Z&sks=b&skv=2021-08-06&sig=XhuL%2BjzSqnPu8Zk47L8LLBEJrjoiZ8VpX327bHQq87Y%3D";
  const setImage = (newImage) => {
    image = newImage;
  };

  //isloading
  let isLoading = false;

  // openAI function integration
  const configuration = new Configuration({
    organization: "org-e4LTVTBp1C2nhyRwB1ZHhKL8",
    apiKey: import.meta.env.VITE_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const fetchData = async () => {
    try {
      isLoading = true;
      const response = await openai.createImage({
        prompt: prompt,
        n: 2,
        size: "512x512",
      });
      setImage(response.data.data[0].url);
      isLoading = false;
    } catch (err) {
      isLoading = false;
      console.log(err);
    }
  };
</script>

<div>
  <Button />
  <h1 class="text-3xl font-bold text-[#57534e] text-center my-7">
    Image Generator
  </h1>
</div>

<div>
  <div class="flex justify-center items-center w-full">
    <input
      type="text"
      placeholder="Enter image description here..."
      on:input={setPrompt}
      value={prompt}
      class="block rounded-md w-[512px] h-[45px] border-0 py-1.5 ml-5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <button
      type="submit"
      on:click={fetchData}
      class="rounded-md text-[#f0ebe6] font-semibold py-2 px-8 ml-5 mr-8 bg-orange-500"
    >
      Generate
    </button>
  </div>
  <div class="flex justify-center items-center pt-6 rounded-md img-container">
    {#if isLoading}
      <div>
        <p>Loading...</p>
        <img src="/Spinner-2.gif" alt="" />
      </div>
    {:else}
      <img class="rounded-md m-1" src={image} alt="" />
    {/if}
  </div>
</div>

<style lang="postcss">
  :global(body) {
    background-color: theme(colors.gray.100);
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }
  :img-container {
    width: 512;
    height: 512;
  }
</style>
