<template>
  <text> {{item.id}}, {{item.text}} </text>
</template>

<script>

import React, { Component } from 'react';

export default {
  props: {
    item: {
      Type: Object
    }
  },
  beforeDestroy() {},
};
</script>