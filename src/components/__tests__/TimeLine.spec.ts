import axios from "axios"
import { describe, it, expect, vi } from "vitest"
import { mount, flushPromises } from "@vue/test-utils"
import TimeLine from "@/components/TimeLine.vue"
import { today, thisWeek, thisMonth } from "../../mocks"

vi.mock("axios")

describe("<TimeLine>", () => {
  it.only("mocked axios", async () => {
    const result = await axios.get("/invalid-path")

    expect(axios.patch).toBeUndefined()
    expect(axios.get).toHaveBeenCalledWith("/invalid-path")
    expect(axios.get).toBeCalledTimes(1)
    expect(result).toMatchObject({
      status: 200,
      statusText: "OK",
      data: { code: 200, data: null }
    })
  })

  it("renders today post default", async () => {
    const wrapper = mount({
      components: { TimeLine },
      template: `
      <Suspense>
        <template #default>
          <TimeLine />
        </template>
        <template #fallback>
          Loading...
        </template>
      </Suspense>
      `
    })
    await flushPromises()
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
