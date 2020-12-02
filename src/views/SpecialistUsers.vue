<template>
  <div>
    <navbar></navbar>
    <div id="container">
      <div id="header">MY USERS</div>
      <div class="container-fluid">
        <div class="row align-items-start justify-content-center">
          <base-card
            v-for="{
              id,
              firstName,
              lastName,
              birthDate,
              profilePicture,
              height,
              weight,
            } in users"
            :key="id"
            class="col-sm-8 col-md-4 base-card"
          >
            <template #description>
              <div class="profile-description-item profile-picture">
                <img :src="profilePicture" alt="profile_picture" width="60" height="60" />
              </div>
              <div class="profile-description-item profile-data">
                <p>Name: {{ firstName + ' ' + lastName }}</p>
                <p>Birthdate: {{ birthDate }}</p>
                <p>Height (cm): {{ height }}</p>
                <p>Weight (kg): {{ weight }}</p>
              </div>
            </template>
            <template #footer
              ><div @click="goTo('foodPlan')" class="check-btn btn-magenta">
                EDIT FOOD PLAN
              </div>
              <div @click="goTo('exercisePlan')" class="check-btn btn-magenta">
                EDIT EXERCISE PLAN
              </div>
              <div @click="goTo('viewStats')" class="check-btn btn-steelblue">
                VIEW STATISTICS
              </div>
            </template>
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '../components/BaseCard'
import Navbar from '../components/navbar'
export default {
  components: {
    BaseCard,
    Navbar,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          firstName: 'Pica',
          lastName: 'Chu',
          birthDate: '01/01/1991',
          profilePicture:
            'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249',
          height: '170',
          weight: '67',
        },
        {
          id: 2,
          firstName: 'My',
          lastName: 'Name',
          birthDate: '01/01/1991',
          profilePicture:
            'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249',
          height: '170',
          weight: '99',
        },
        {
          id: 3,
          firstName: 'Daniel',
          lastName: 'Felipe',
          birthDate: '01/01/1881',
          profilePicture:
            'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249',
          height: '170',
          weight: '77',
        },
        {
          id: 4,
          firstName: 'Pica',
          lastName: 'Chu',
          birthDate: '01/01/1991',
          profilePicture:
            'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249',
          height: '170',
          weight: '87',
        },
        {
          id: 5,
          firstName: 'Pica',
          lastName: 'Chu',
          birthDate: '01/01/1991',
          profilePicture:
            'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249',
          height: '170',
          weight: '67',
        },
        {
          id: 6,
          firstName: 'Pica',
          lastName: 'Chu',
          birthDate: '01/01/1991',
          profilePicture:
            'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249',
          height: '170',
          weight: '67',
        },
        {
          id: 7,
          firstName: 'Chu',
          lastName: 'Pica',
          birthDate: '01/01/1991',
          profilePicture:
            'https://telegram.org/file/464001801/4/pPObBDJVv-M.32191.png/9963667389a3218249',
          height: '170',
          weight: '67',
        },
      ],
    }
  },
  methods: {
    goTo(option) {
      console.log(option)
    },
  },
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Ubuntu', Sans-serif;
}

p {
  margin: 0;
}

#container {
  background-color: #eedd;
}

#header {
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  letter-spacing: 10px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  box-shadow: 0px 1px 5px rgb(47, 79, 79);
  margin-bottom: 10px;
}

.profile-description-item {
  display: inline-block;
}
.profile-picture {
  width: 20%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 10px;
}

.profile-data {
  width: 75%;
}

h1 {
  margin-top: 5vh;
}

.base-card {
  margin: 30px 15px 0px 15px;
  animation: to-left 1.5s ease-in;
}

.check-btn {
  padding: 2px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 26px;
  margin-top: 10px;
  text-align: center;
}

.btn-magenta {
  background-color: rgb(32, 214, 199);
  color: white;
  cursor: grab;
}

.btn-steelblue {
  background-color: rgb(70, 130, 180);
  color: white;
  cursor: grab;
}

.btn-magenta:hover,
.btn-steelblue:hover {
  animation: scale 0.5s ease-in-out;
}

a {
  text-decoration: none;
  color: white;
}

@keyframes scale {
  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes to-left {
  0% {
    transform: scale(0);
  }

  30% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
}
</style>
