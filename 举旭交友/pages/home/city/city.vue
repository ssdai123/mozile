<template>
	<view>
		<ss-select-city :hotCitys="hotCitys" v-model="value" @on-select="saveCity(value)" />
	</view>
</template>

<script>
	import ssSelectCity from '@/components/ss-select-city/ss-select-city.vue'
	export default {
	data() {
	  return {
	    hotCitys: ['杭州', '天津', '北京', '上海', '深圳', '广州', '成都', '重庆', '厦门'],
	    value: '杭州'
	  }
	},
	components: {
	  ssSelectCity
	},
	onLoad() {
		uni.getLocation({
		    type: 'gcj02',
		    success: function (res) {
		        console.log('当前位置的经度：' + res.longitude);
		        console.log('当前位置的纬度：' + res.latitude);
				console.log('当前位置的纬度：' + res.address);
				//this.value="未知";
		    }
		});
	},
	methods: {
	 saveCity(city){
	    console.log(city)
	  }
	}
	}
</script>

<style>

</style>
