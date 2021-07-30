<template>
  <Page>
    <ActionBar>
      <Label :text="title"/>
    </ActionBar>
    <GridLayout
      class="industries"
      columns="*"
      rows="auto, auto, auto"
    >
      <label
        class="md-title industries__title-label"
        text="Interested in particular country?"
        textWrap="true"
        col="0"
        row="0"
      />
      <GridLayout
        columns="*"
        rows="auto, auto, auto"
        col="0"
        row="2"
      >
        <FlexboxLayout
          class="industries__chips-container"
          flexWrap="wrap"
          col="0"
          row="0"
        >
          <GridLayout
            v-for="(country, index) in contriesList"
            v-bind:key="index"
            :class="[
              'chips',
              {'industries__chips-container--active-chip': country.active},
              {'industries__chips-container--deactive-chip': !country.active}
            ]"
            columns="auto, auto"
            rows="auto"
            @tap="changeCountryStatus(index)"
          >
            <label
              v-if="country.active"
              class="mdi2 checkmark"
              :text="mdiCheck"
              verticalAlignment="center"
              col="0"
              row="0"
            />
            <label
              class="chip-label"
              :text="country.name"
              col="1"
              row="0"
            />
          </GridLayout>
        </FlexboxLayout>
        <GridLayout
          class="industries__input"
          col="0"
          row="1"
          columns="*, 44"
          rows="auto"
        >
          <Label
            col="0"
            row="0"
            text="Add/select a country*"
            @tap="autoCompleteTapped"
          />
        </GridLayout>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script src="./Home.ts" lang="ts"></script>
<style src="./Home.scss" scoped lang="scss"></style>
