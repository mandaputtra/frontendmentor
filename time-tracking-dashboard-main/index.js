const json = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const profile = document.querySelector(".profile-container");
json.reverse();

function deleteAllSummary() {
  const summaries = document.querySelectorAll(".summary-container");
  for (const el of summaries) {
    el.remove();
  }
}

function changeFilter(e) {
  const type = e.value || "weekly";
  deleteAllSummary();
  for (const data of json) {
    const card = document.createElement("div");
    card.classList.add("summary-container");
    const title = data.title.split(" ").join("-").toLowerCase();
    card.classList.add(title);
    card.innerHTML = `
      <img class="summary-image" width="80px" height="80px" src="./images/icon-${title}.svg" alt="icon"/>
        <div class="summary-inner">
          <div class="header">
            <p>
              <b>${data.title}</b>
            </p>
            <p class="view-more">...</p>
          </div>
          <div class="detail">
            <h2>${data.timeframes[type].current}hrs</h2>
            <p>Previous - ${data.timeframes[type].previous} Hours</p>
          </div>
      </div>
    `;
    profile.insertAdjacentElement("afterEnd", card);
  }
}

changeFilter({});
