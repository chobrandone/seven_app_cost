import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/Home/Home.vue'

describe('Home.vue', () => {
    it('renders h1 tag', () => {

        const wrapper = shallowMount(Home, {
            propsData: { appName }
        })
        expect(wrapper.text(h1)).to.include(appName)
    })
    it('renders button tag', () => {

        const wrapper = shallowMount(Home, {
            propsData: { homeButton }
        })
        expect(wrapper.text(h1)).to.include(homeButton)
    })
})