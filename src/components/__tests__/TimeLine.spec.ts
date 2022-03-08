import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TimeLine from "@/components/TimeLine.vue"
import { today, thisWeek, thisMonth } from "../../mocks"

describe("<TimeLine>", () => {
  it("renders today post default", () => {
    const wrapper = mount(TimeLine)
    console.log(wrapper.html())
    expect(wrapper.html()).toContain(today.created.format("Do MMM"))
  })

  it("updates when the week period is clicked", async () => {
    const wrapper = mount(TimeLine)
    await wrapper.get('[data-test="This Week"]').trigger("click")
    expect(wrapper.html()).toContain(today.created.format("Do MMM"))
    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"))
  })

  it("updates when the month period is clicked", async () => {
    const wrapper = mount(TimeLine)
    await wrapper.get('[data-test="This Month"]').trigger("click")
    expect(wrapper.html()).toContain(today.created.format("Do MMM"))
    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"))
    expect(wrapper.html()).toContain(thisMonth.created.format("Do MMM"))
  })
})
