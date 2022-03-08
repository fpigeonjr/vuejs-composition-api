import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TimeLine from "@/components/TimeLine.vue"
import { today } from "../../mocks"

describe("<TimeLine>", () => {
  it("renders today post default", () => {
    const wrapper = mount(TimeLine)

    console.log(wrapper.html())
    expect(wrapper.html()).toContain(today.created.format("Do MMM"))
  })
})
