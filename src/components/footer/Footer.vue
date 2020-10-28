<template>
<div class="footer animate__animated animate__fadeIn">
  <div class="foot ">
    <div class="logo">
      <img src="../../assets/img/logo2.png" alt="logo" class="img-logo " />
    </div>

    <div class="pt-2">
      <p class="font-weigth-bold">&copy; {{new Date().getFullYear()}} SevenGps |{{ $t('footer.copywrite') }}</p>
    </div>
  </div>
</div>
</template>

<style scoped>
@media (min-width: 240px) {
  .foot {
    display: block;
    flex-direction: column;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 150px;
  }

  p {
    text-align: center;
    font-size: 8px;
  }

}

@media (min-width: 280px) {
  .foot {
    display: block;
    flex-direction: column;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 180px;
  }

  p {
    text-align: center;
    font-size: 10px;
  }
}

@media (min-width: 320px) {
  .foot {
    display: block;
    flex-direction: column;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 150px;
  }

  p {
    text-align: center;
    font-size: 8px;
  }
}

@media (min-width: 360px) {
  .foot {
    display: block;
    flex-direction: column;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 204px;
  }

  p {
    text-align: center;
    font-size: 8px;
  }
}

@media (min-width: 411px) {
  .foot {
    display: block;
    flex-direction: column;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 150px;
  }

  p {
    text-align: center;
    font-size: 8px;
  }
}

@media (min-width: 600px) {
  .foot {
    display: block;
    flex-direction: column;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 240px;
  }

  p {
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
  }

}

@media (min-width: 640px) {
  .foot {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 124px;
  }

  p {
    text-align: center;
    font-size: 10px;
  }
}

@media (min-width: 768px) {
  .foot {
    display: block;
    justify-content: space-between;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 150px;
  }

  p {
    text-align: center;
    font-size: 8px;
  }
}

@media (min-width: 800px) {
  .foot {
    display: block;

  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 265px;
  }

  p {
    text-align: center;
    font-size: 12px;
    margin-top: 12px;
  }

}

@media (min-width: 1024px) {
  .foot {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 217px;
  }

  p {
    text-align: center;
    font-size: 15px;
  }
}

@media (min-width: 1280px) {
  .foot {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 217px;
  }

  p {
    text-align: center;
    font-size: 15px;
  }
}

@media (min-width: 1440px) {
  .foot {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .logo {
    vertical-align: middle;
    border-style: none;
    /* margin-left: 2rem; */
    text-align: center;
  }

  img {
    vertical-align: middle;
    border-style: none;
    width: 217px;
  }

  p {
    text-align: center;
    font-size: 15px;
  }
}
</style>
