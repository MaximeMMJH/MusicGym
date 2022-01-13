import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  it("hide button when user is logged off", async () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  it("show button when user is logged in", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });
    expect(wrapper.find("button").isVisible()).toBe(false);
  });
});
