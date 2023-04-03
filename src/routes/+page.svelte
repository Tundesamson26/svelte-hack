<script>
  import  imageStores from "$lib/store/ArtStore";
  import { Configuration, OpenAIApi } from "openai";

  let prompt;
  let image = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-e4LTVTBp1C2nhyRwB1ZHhKL8/user-fVk8kO2uHbVysumf0AfU26o2/img-rkDsUfv400QxPQn8KKvLSjNi.png?st=2023-04-01T20%3A30%3A51Z&se=2023-04-01T22%3A30%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-01T18%3A15%3A39Z&ske=2023-04-02T18%3A15%3A39Z&sks=b&skv=2021-08-06&sig=%2BXIyjN71FeTUQxOGimiSGerSL4Jos5THjuo/EbbbRj8%3D";

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

<h1 class="text-3xl font-bold" on:submit={fetchData}>Image Generator</h1>
<form action="">
  <input bind:value={image} type="text" placeholder="enter image description here...">
  <button type="submit" on:click={fetchData}>Generate</button>
</form>
<img src={image} alt="">


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
