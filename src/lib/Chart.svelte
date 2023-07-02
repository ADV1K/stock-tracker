<script>
  import { onMount } from "svelte";
  import asianpaints from "./asianpaints.json";
  import Chart from "chart.js/auto";

  export let id;

  const data = asianpaints.grapthData;
  const factor = 200; // downsample factor
  let labels = [];
  let points = [];

  for (let i = 0; i < data.length; i += factor) {
    const date = new Date(data[i][0]);
    const price = data[i][1];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    labels.push(`${price} INR  ${hours}:${minutes}`);
    points.push(price);
  }
  console.log(points);



  let myChart;
  onMount(() => {
    let ss = `#chart-${id}`;
    console.log(ss);
    const parent = document.querySelector(ss);
    console.log(parent);
    const canvas = document.createElement("canvas");
    canvas.setAttribute("height", "20");
    // canvas.setAttribute("width", "500");
    // canvas.setAttribute("id", "myCanvas");
    parent.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "",
            data: points,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            pointRadius: 0,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            mode: "nearest",
            intersect: false,
            callbacks: {
              label: (context) => "",
            },
          },

          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    });
  });
</script>

<div id={`chart-${id}`} />
