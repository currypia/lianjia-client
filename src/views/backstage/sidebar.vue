<template>
  <div>
    <headers> </headers>

    <div class="BackstageMain">

      <el-container>
        <el-aside class="aside"
                  width="700rpx">
          <el-menu default-active="2"
                   background-color=" rgb(38, 150, 83)"
                   text-color="white"
                   active-text-color="#ffd04b">
            <el-menu-item v-for=" side in sideList "
                          :key="side.id"
                          class="elmenu">
              <div>
                <i class="el-icon-setting"></i>
                <span slot="title">
                  <router-link :to=" side.url ">{{side.name}}</router-link>
                </span>
              </div>
            </el-menu-item>

          </el-menu>
        </el-aside>

        <el-container>
          <el-main class="main">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>

    </div>
    <footercomponent></footercomponent>
  </div>
</template>
<script>
import headers from '../../components/backstage/Header.vue'
import footercomponent from '../../components/footercomponent.vue'
export default {
  data () {
    return {
      status: "",
      sideList: [
        {
          id: 1,
          name: "查看收藏",
          url: "/Likestar",
          dis: "block"
        },
        {
          id: 2,
          name: "房子状态",
          url: "/b",
          dis: "block"
        },
        {
          id: 3,
          name: "查看房子",
          url: "/ChanceHouse",
          dis: "block"
        },
        {
          id: 4,
          name: "查看订单",
          url: "/SeeSell",
          dis: "block"
        },
        {
          id: 5,
          name: "管理员功能",
          url: "/admin",
          dis: "block"
        },
        {
          id: 6,
          name: "查看通知",
          url: "/notice",
          dis: "block"
        },
        {
          id: 7,
          name: "用户信息",
          url: "/p",
          dis: "block"
        },
        {
          id: 8,
          name: "退出登录",
          url: "/aaa",
          dis: "block"
        },

      ],
      successLogin: 1,
    }
  },
  created () {
    this.status = sessionStorage.getItem('userstatus')
    console.log('在sidebar中获取的status:' + this.status);
    // if (this.status != 3) {
    //   sideList[5].
    //     }
  },
  methods: {
  },
  components: {
    headers,
    footercomponent
  },
};
</script>
<style scoped>
.router-link-active {
  text-decoration: none;
  color: yellow;
}
a {
  text-decoration: none;
  color: white;
}
.BackstageMain {
  margin-top: 12px;
  margin-left: 3%;
}
.main {
  width: 100%;
  height: 800rpx;
}
.aside {
  color: white;
  height: 1000px;
}
.elmenu {
  padding-top: 7px;
  height: 80px;
  border-bottom-style: solid;
  border-color: grey;
  color: white;
  border-width: 0.5px;
  text-decoration: none;
}
</style>
