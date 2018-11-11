<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum porttitor ante, ac malesuada dolor gravida in. Nam egestas enim non erat suscipit, ut interdum risus vehicula. Nunc pharetra, nunc viverra faucibus ultrices, odio diam accumsan augue, pellentesque porta massa ex nec justo. Quisque ac nisl sed dui tempor aliquet. Vestibulum et quam venenatis, commodo lacus a, placerat libero. Maecenas orci erat, aliquam sed ipsum eu, interdum mollis enim. Donec aliquam, turpis eu varius consequat, mauris velit eleifend ipsum, nec scelerisque nisl ex nec leo. Aenean consectetur tincidunt ultricies. In eu velit faucibus, iaculis ante quis, feugiat mauris.

      Sed aliquam ante in velit sollicitudin, id suscipit libero rutrum. Quisque vulputate orci ac tortor viverra posuere et eget purus. Cras et ex convallis, congue turpis eu, maximus metus. Proin finibus est eget quam luctus volutpat. Aenean massa nisi, interdum eget fermentum a, dictum ac nunc. Phasellus maximus dui a rutrum vehicula. Nunc libero dui, blandit in turpis a, congue convallis nisl.

      Suspendisse pulvinar, massa et dapibus porta, diam dolor maximus justo, sed pellentesque sapien libero id justo. Sed rhoncus ac velit in efficitur. Donec pretium tristique euismod. Suspendisse congue sed nunc sed ultrices. Sed laoreet, enim quis porta euismod, arcu orci euismod ex, sed fringilla purus est et justo. Proin quis consectetur mauris. Vivamus tortor purus, scelerisque et neque ac, ornare ornare nunc. In id ex nec elit lacinia tristique. Maecenas hendrerit aliquet arcu, dignissim euismod erat eleifend nec.

      Nulla ac ex laoreet, bibendum metus et, porta lectus. Aenean fermentum sapien quis maximus feugiat. Sed porttitor diam tortor, at viverra mauris facilisis quis. Phasellus semper lacus vel odio maximus, sed vulputate tortor interdum. Maecenas semper accumsan posuere. Maecenas efficitur tempor pellentesque. Vivamus vel sem pretium, blandit mi a, scelerisque diam. In hac habitasse platea dictumst. Donec nec tortor arcu. In faucibus eget nisl sit amet convallis. Praesent at hendrerit arcu. Curabitur efficitur, nisl non tempus consequat, mi ligula interdum sapien, sit amet fringilla dolor erat sit amet nunc. Integer interdum nulla in sapien dictum, in efficitur libero laoreet. In maximus faucibus ornare.

      Cras eu porta orci. Curabitur ut aliquam nunc, id suscipit justo. Nullam quis gravida tortor. Curabitur tempus velit nulla, faucibus semper dolor fermentum eget. Pellentesque aliquet vulputate fermentum. Etiam ac nisl ullamcorper, luctus diam a, vestibulum leo. Nullam porttitor pulvinar neque eu lacinia. Suspendisse potenti.</p>
    <Book :book="book" :key="index" v-for="(book, index) of books"/>
  </div>
</template>

<script>
  import Book from './Book'
  export default {
    name: 'Books',
    components: { Book },
    props: ['books']
  }
</script>

<style scoped>

</style>
