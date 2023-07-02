<script>
  // https://tradingstrategy.ai/trading-view/trading-pairs
  import data from "./data.json";
  import Chart from "./Chart.svelte";
  // import upArrow from "$lib/assets/up-arrow.svg";
  // import downArrow from "$lib/assets/down-arrow.svg";

  let items = data.data;

  console.log(data);
</script>

<h1
  class="text-4xl font-bold text-gray-100 mx-auto text-center my-8 tracking-wider"
>
  NIFTY 50
</h1>

<table
  class="table max-w-screen-md mx-auto text-lg border-separate border-spacing-y-2"
>
  <thead>
    <tr class="sticky top-2 border-b-0 text-lg bg-base-100">
      <th class="rounded-l-box">#</th>
      <th>Ticker</th>
      <th>Price</th>
      <th>Change</th>
      <th>Change%</th>
      <!-- <th class="rounded-r-box">Chart</th> -->
    </tr>
  </thead>
  <tbody>
    {#each items as item, i}
      <!-- make the first row sticky. (nifty 50) -->
      <tr class="bg-base-300 hover">
        <td class="rounded-l-box">#{i}</td>
        <td>
          <span class="font-bold">
            {item.symbol}
          </span>
        </td>
        <td>{item.lastPrice}</td>

        <!-- Change -->
        <td>
          {#if item.pChange < 0}
            <span class="badge badge-error badge-lg text-gray-900">
              <!-- <span>{downArrow}</span> -->
              {-item.change.toFixed(2)}
            </span>
          {:else if item.pChange > 0}
            <span class="badge badge-success badge-lg text-gray-900">
              <!-- <span>{upArrow}</span> -->
              {item.change.toFixed(2)}
            </span>
          {:else}
            <span class="badge badge-neutral badge-lg text-gray-300">
              {item.change.toFixed(2)}
            </span>
          {/if}
        </td>

        <!-- Percent Change -->
        <td>
          {#if item.pChange < 0}
            <span class="badge badge-error badge-lg text-gray-900">
              {-item.pChange.toFixed(2)}%
            </span>
          {:else if item.pChange > 0}
            <span class="badge badge-success badge-lg text-gray-900">
              {item.pChange.toFixed(2)}%
            </span>
          {:else}
            <span class="badge badge-neutral badge-lg text-gray-300">
              {item.pChange.toFixed(2)}%
            </span>
          {/if}
        </td>

        <!-- Chart -->
        <td class="rounded-r-box">
          <Chart id={i} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>
