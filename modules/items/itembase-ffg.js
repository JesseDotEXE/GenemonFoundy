import EmbeddedItemHelpers from "../helpers/embeddeditem-helpers.js";

export default class ItemBaseFFG extends Item {
  async update(data, options = {}) {
    if (!this.flags?.genemon?.ffgTempId || (this.flags?.genemon?.ffgTempId === this._id && !this.isTemp) || this.flags?.genemon?.ffgIsOwned) {
      await super.update(data, options);
      // if (this.compendium) {
      //   return this.sheet.render(true);
      // }
      return;
    } else {
      const preState = Object.values(this.apps)[0]._state;

      await EmbeddedItemHelpers.updateRealObject(this, data);

      if (this.flags?.genemon?.ffgParent?.isCompendium || Object.values(this.apps)[0]._state !== preState) {
        if (this.flags?.genemon?.ffgParent?.ffgUuid) {
          this.sheet.render(false);
        }
      } else {
        let me = this;

        // we're working on an embedded item
        await this.sheet.render(true);
        const appId = this.system?.flags?.genemon?.ffgParentApp;
        if (appId) {
          const newData = ui.windows[appId].object;
          newData[this.flags.genemon.ffgTempItemType][this.flags.genemon.ffgTempItemIndex] = mergeObject(newData[this.flags.genemon.ffgTempItemType][this.flags.genemon.ffgTempItemIndex], this);
          await ui.windows[appId].render(true, { action: "ffgUpdate", data: newData });
        }
        return;
      }
    }
  }
}
