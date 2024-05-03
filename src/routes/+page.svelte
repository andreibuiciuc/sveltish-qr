<script lang="ts">
  import type { EncodingPayload } from "$lib/types";
	import InputBar from "$lib/components/qr/input-bar.svelte";
  import DisplayQR from "$lib/components/qr/display.svelte";
  
  let state = {
    encodedInput: [],
    isEncodingInProgress: false
  } as {
    encodedInput: string[]
    isEncodingInProgress: boolean
  }

  async function startEncoding(inputData: EncodingPayload): Promise<void> {
    state.isEncodingInProgress = true;
    try {
      const response = await fetch('http://127.0.0.1:8000/encode', {
        method: "POST",
        body: JSON.stringify({
          input: inputData.input,
          correction_level: inputData.correctionLevel ?? "M"
        })
      });

      if (response.ok) {
        const data = await response.json();
        state.encodedInput = data.encoded_matrix;
      } else {
        console.error("fetch error");
      }
    } catch (e) {
      // TODO: Handle error
      console.error(e);
    }
    state.isEncodingInProgress = false;
  }
</script>

<div class="w-screen h-screen flex flex-col items-center justify-around">
  <DisplayQR encodedInput={state.encodedInput} />
  <InputBar 
    disabled={state.isEncodingInProgress}
    on:submit={(event) => startEncoding(event.detail)}
  />
</div>