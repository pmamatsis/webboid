<template lang="pug">
.div(style="padding:10px; max-width:1300px;")
  .layout-padding.full-width(v-if="!authenticated" style="min-height=300px;")
    .row.justify-center.gutter
      q-btn( big color="green" style="font-size:35px;" @click="$e.$emit('openAuthModal',true)") Join US
  .row.justify-center
    .col-sm-12.col-lg-4.relative-position
      div.relative-position(style="min-width:300px; padding-bottom:0px;")
        .layout-padding.full-width.relative-position(style="height:120px;")
          img.absolute-center.block(style="max-width:120px; max-height:120px; height: auto;" :src="team.image")
        h5.text-center {{team.name | removeDash}}
        div(style="padding:10px;")
          p.light-paragraph {{team.tagline}}
        br
      div.absolute-bottom(style="bottom:15px;")
        div(v-if="parseSocial" style="margin-top:16px;")
          p.light-paragraph.text-center
          .row.justify-center(style="padding-top:0px")
            .col(v-for="(social,index) in parseSocial" :key="index")
              .row.justify-center
                q-btn.socialbtn(flat round @click="openURL(social.url)")
                  img.socialbtn(:src="social.img" style="max-width:35px; filter:opacity(.8)")
                  q-tooltip {{social.url}}

    .col-sm-12.col-lg-8
      q-card.relative-position(ref="chartDiv" style="height:375px; padding: 10px; padding-top: 15px;")
        .light-paragraph.text-center(style="margin-bottom:30px;") Team Graphs (14d)
        teamChart( style="margin-top:20"
          v-if="powerChart" :chartData="powerChart" :height="295")
        q-inner-loading(:visible="!powerChart")
          q-spinner-ball(size="60px" color="blue")
    .row.full-width(v-if="team")
      .col-xs-12.col-sm-12.col-md-4.col-xl-4
        .row
          .col-12.relative-position
            q-card(v-if="team.owner")
              p.light-paragraph.text-center Leader
              q-item( style="padding-top:6px;"
                highlight :to="{name:'User',params:{username:team.owner.username}}")
                q-item-side(:avatar="team.owner.image")
                q-item-main
                  q-item-tile(label) {{team.owner.username}}
                  q-item-tile.ellipsis(sublabel)
                    small {{team.owner.tagline}}
                q-item-side(right icon="flash_on" stamp="")
                  small.text-center {{parseInt(team.owner.tPower)}}
      .col(v-if="team" v-for="stat of teamStats" :key="stat.label").col-xs-6.col-sm-3.col-md-2.col-lg-2
        q-card.relative-position.ellipsis(style="min-width:70px; padding:10px;")
          p.light-paragraph.text-center {{stat.label}}
          div.relative-position(style="margin:auto; margin-top:0px")
            h5.text-center(style="z-index:5; margin-top:33px; margin-bottom:20px; font-size:18px;") {{stat.data}}
            img.text-center.absolute-center(v-if="stat.image" :src="stat.image" style="height:50px; filter: opacity(.6); z-index:-4")
            q-icon.text-center.absolute-center(v-if="stat.icon != 'add'" color="green-2" :name='stat.icon' style="font-size:45px; z-index:-4;")
            q-icon.text-center.absolute-center(v-else color="green-2" :name='stat.icon' style="font-size:80px; z-index:-4;")
            q-tooltip {{stat.label}}

  .row.gutter.justify-center
    .col
      q-card()
        p.light-paragraph.text-center {{leaderboardTitle}}
        teamLeaderboard(:leaderboard="leaderboard" :thisUser="thisUser" :type="leaderboardType")
    .col-md-12.col-lg-6
      q-card
        p.light-paragraph.text-center Team Promotions
        div(v-if="teamPromotions")
          .row.justify-center(style="padding-bottom:5px;")
            small filter
          .row.justify-center
            q-btn(flat :class="{activeTab:ended === false}" @click="ended = false")
              | live & upcoming
            q-btn(flat :class="{activeTab:ended === true}" @click="ended = true") Ended
          h6.light-paragraph Physical Rewards 
          div(v-if="teamPromotions.physical.length > 0" style="max-height:600px; overflow:auto;")
            promoCard.cursor-pointer.clickable(
            v-for="promo of teamPromotions.physical" 
            :key="promo.id" :promo="promo" :userid="thisUser.id"
            @selected="showPromoLeaderboard(promo)" 
            @deselected="setupLeaderboard()" 
            :deselect="selectedPromo")
          div(v-else)
            q-card.relative-position(style="padding:20px;")
              div.light-paragraph.text-center No physical rewards available...
              q-tooltip You can ask the team leader to add some additional rewards.
          h6.light-paragraph Coin Rewards 
          div(v-if="teamPromotions.coin.length > 0" style="max-height:600px; overflow:auto;")
            promoCard.cursor-pointer.clickable(
            v-for="promo of teamPromotions.coin" 
            :key="promo.id" :promo="promo" :userid="thisUser.id" 
            @selected="showPromoLeaderboard(promo)" 
            @deselected="setupLeaderboard()" 
            :deselect="selectedPromo")
          div(v-else)
            q-card.relative-position(style="padding:20px;")
              div.light-paragraph.text-center No coin rewards available...
              q-tooltip You can ask the team leader to add some additional rewards.
          h6.light-paragraph Boid NFT Collectibles 
          div(v-if="teamPromotions.nft.length > 0" style="max-height:600px; overflow:auto;")
            .row
              .col
                promoCard.cursor-pointer.clickable(
                v-for="promo of teamPromotions.nft" 
                :key="promo.id" :promo="promo" :userid="thisUser.id"
                @selected="showPromoLeaderboard(promo)" 
                @deselected="setupLeaderboard()" 
                :deselect="selectedPromo")
          div(v-else)
            q-card.relative-position(style="padding:20px;")
              div.light-paragraph.text-center No collectible rewards available...
              q-tooltip You can ask the team leader to add some additional rewards.
      q-card(v-if="team.tWidget" style="padding:0px; height:510px; overflow:hidden;" )
        iframe(
          :src="team.tWidget"
          style="margin:0px;"
          id="tgw_5c6ca24c83ba88d8738b456d" 
          frameborder="0" 
          scrolling="no" 
          horizontalscrolling="no" 
          verticalscrolling="no" 
          width="100%" 
          height="540px"
        )
</template>

<script>
import teamChart from '@/teamChart.vue'
import promoCard from '@/promoCard.vue'
import teamLeaderboard from '@/teamLeaderboard.vue'
import parseSocials from 'lib/parseSocial.js'
import { openURL } from 'quasar'

export default {
  name: 'index',
  components:{teamChart,promoCard,teamLeaderboard},
  data() {
    return {
      team: {},
      leaderboard: [],
      leaderboardTitle:"",
      chartData:null,
      selectedPromo:"",
      leaderboardType:'LIVE',
      ended:false,
      endedPromotions:[],
      promotions:[]
    }
  },
  computed: {
    parseSocial(){
      if (!this.team.social) return null
      return parseSocials(this.team.social)
    },
    powerChart(){
      if (!this.chartData) return null
      var labels = []
      var data = []
      var data2 = []
      this.chartData.forEach((el)=>{
        if (!el.createdAt) return null
        const created = new Date(el.createdAt)
        labels.push(created.getMonth() + 1 + '/' + created.getDate())
        data.push(parseInt(el.teamPower))
        data2.push(parseInt(el.activeUsers))
      })
      return {labels,datasets:[{data:data},{data:data2}]}},
    teamStats(){
      if (!this.team.owner) return null
      var ownerStake = this.team.owner.stake.toFixed(0).toLocaleString()
      if (!ownerStake) return null
      return [
        {
          data:parseInt(this.team.power).toLocaleString(),
          image:"/statics/images/BoidPower.svg",
          label:"Team Power"
        },
        {
          data:this.team.activeUsers,
          icon:'fa-users',
          label:"Active Users"
        },
        {
          data:(this.team.bonus * 100).toFixed(2) + '%',
          icon:'add',
          label:"Team Bonus"
        },
        {
          data:ownerStake + ' BOID',
          icon:'lock',
          label:"Leader Stake"
        }
      ]
    },
    teamPromotions(){
      if (!this.promotions) return null
      var tempPromo = this.promotions
      var promotions = {}
      const now = Date.now()
      tempPromo = tempPromo.map((el,i,arr)=>{
        if (Date.parse(el.startDate) > now && Date.parse(el.endDate) > now ){
          el.active = false
        }else{
          el.active = true
        }
        if (el.leaderboardType === 'AVERAGE'){
          el.leaderboard.sort((a, b) => b.averagePower - a.averagePower)
        }else{
          el.leaderboard.sort((a, b) => b.cumulativeMined - a.cumulativeMined)
        }
        return el
      })
      this.endedPromotions = tempPromo.filter(el=> now > Date.parse(el.endDate))

      if (this.ended) tempPromo = this.endedPromotions
      else tempPromo = tempPromo.filter(el=> now < Date.parse(el.endDate))
      // if (this.active) tempPromo = tempPromo.filter(()=>false)
      promotions.physical = tempPromo.filter(el => el.reward.type === 'PHYSICAL')
      .sort((a,b) => new Date(a.startDate) - new Date(b.startDate))
      promotions.coin = tempPromo.filter(el => el.reward.type === 'COIN')
      .sort((a,b) => new Date(a.startDate) - new Date(b.startDate))
      promotions.nft = tempPromo.filter(el => el.reward.type === 'NFT')
      .sort((a,b) => new Date(a.startDate) - new Date(b.startDate))

      return promotions
    }
  },
  methods: {
    openURL,
    showPromoLeaderboard(promo){
      this.$router.push({ query: Object.assign({}, this.$route.query, { promo: promo.id }) })
      if (Date.parse(promo.endDate) < Date.now()) this.leaderboardTitle = "The selected promotion has ended."
      else if (!promo.active) this.leaderboardTitle = "The selected promotion has not started yet."
      else this.leaderboardTitle = "leaderboard for the selected team promotion"
      this.selectedPromo = promo.id
      this.leaderboardType = promo.leaderboardType
      const promoLeaderboard = promo.leaderboard.map(el =>{
        var result = Object.assign({},el.user)
        if (promo.leaderboardType == "AVERAGE") result.tPower = el.averagePower
        else result.tPower = el.cumulativeMined 
        result.tokenTransaction = el.tokenTransaction
        return result
      })
      // console.log('hi',promo.leaderboard)
      // console.log('PROMOLEADERBOARD',promoLeaderboard)
      this.leaderboard = promoLeaderboard
    },
    setupLeaderboard: async function() {
      let query = Object.assign({}, this.$route.query)
      delete query.promo
      this.$router.replace({ query })
      this.leaderboardType = 'LIVE'
      this.leaderboardTitle = "Top Users on " + this.team.name.replace(/-/g, ' ')
      // if (this.leaderboard.length > 0) console.log('found leaderboard already')
      this.leaderboard = await this.$api.teamLeaderboard({id:this.team.id})
    },
    async populateTeamPromotions(){
      this.promotions = await this.$api.getTeamPromotions({teamId:this.team.id})
      const promoId = this.$route.query.promo
      if (promoId){
        const foundPromo = this.promotions.find(el=>el.id === promoId)
        if (foundPromo){
          if (Date.parse(foundPromo.endDate) < Date.now()) this.ended = true
          this.showPromoLeaderboard(foundPromo)
        }else {
          this.setupLeaderboard()
        }
      }

    },
    async getTeamChart(){
      this.chartData = await this.$api.getTeamChart({teamId:this.team.id})
    }
  },
  watch: {
    async ended(val){
      // console.log(val)
    },
    async team(val) {
      if (!val) return
      if (!this.$route.query.promo) this.setupLeaderboard()
      this.populateTeamPromotions()
      this.getTeamChart()
      window.localStorage.setItem('invitedById', this.team.owner.id)
    }
  },
  async created() {
    // console.log(this.$route)
    this.team = await this.$api.getTeam({name:this.$route.params.teamname})
    // console.log(this.team.owner.stake)
  },
  async mounted(){
    setTimeout(()=>{
      if(!this.$route.query.promo | !this.$q.platform.is.desktop) return
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: 'smooth'
      })
    },500)
  },
  destroyed(){
    this.$e.$off('team')
  },
  props: ['thisUser', 'api', 'authenticated']
}
</script>
<style lang="stylus" scoped>
@import '~variables'
p
  margin-bottom 15px

.hover:hover{
  background-color: $grey-2;
}
.q-card {
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
}
.tokenimg{
  width:50px;
}
.user:hover {
  background-color: $grey-2;
}
.socialbtn:hover
  filter: opacity(1.0)
.activeTab
  background-color: $green-7
  color: white
</style>
