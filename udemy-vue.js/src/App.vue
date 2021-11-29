<template>
  <div style="padding: 10rem">
    <LinkHeader></LinkHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :test-case="string"></LikeNumber>
    <LikeNumber :test-case="number"></LikeNumber>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="maxNumber">最大人数</label>
      <input type="number" id="maxNumber" v-model="eventData.maxNumber" />
    </div>
    <EventTitle v-model="eventData.title"></EventTitle>
    <div>
      <label for="host">主催者</label>
      <input type="text" id="host" v-model.trim.lazy="eventData.host" />
      <label for="detail">イベントの内容</label>
    </div>
    <div>
      <textarea name="" id="" cols="30" rows="10" v-model="eventData.detail">
      </textarea>
      <p style="white-space: pre">{{ eventData.detail }}</p>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
      <p>イベント参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">有料</label>
      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option v-for="location of locations" :key="location">
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LinkHeader from "./Components/LinkHeder.vue";
import EventTitle from './Components/EventTitle.vue';

export default {
  data() {
    return {
      number: 10,
      locations: ["東京", "名古屋", "北海道", "大阪"],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: true,
        target: [],
        price: "無料",
        location: [],
        EventTitle
      },
    };
  },
  components: {
    LinkHeader,
  },
};
</script>
