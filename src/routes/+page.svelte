<script>
  import { Configuration, OpenAIApi } from "openai";

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
      console.log(response.data.data[0].url)
    } catch (err) {
      console.log(err);
    }
  };
</script>

<h1 class="text-3xl font-bold">Image Generator</h1>
<button on:click={fetchData}>Generate</button>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
