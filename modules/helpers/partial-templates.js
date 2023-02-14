export default class TemplateHelpers {
  static async preload() {
    const templatePaths = [
      "systems/genemon/templates/parts/shared/ffg-modifiers.html",
      "systems/genemon/templates/parts/actor/ffg-skills.html",
      "systems/genemon/templates/parts/actor/ffg-weapon-armor-gear.html",
      "systems/genemon/templates/parts/actor/ffg-homestead-upgrades.html",
      "systems/genemon/templates/parts/actor/ffg-homestead-storage.html",
      "systems/genemon/templates/parts/actor/ffg-talents.html",
      "systems/genemon/templates/parts/actor/ffg-forcepowers.html",
      "systems/genemon/templates/parts/actor/ffg-criticalinjury.html",
      "systems/genemon/templates/parts/shared/ffg-block.html",
      "systems/genemon/templates/parts/actor/ffg-signatureability.html",
      "systems/genemon/templates/chat/roll-forcepower-card.html",
      "systems/genemon/templates/chat/roll-weapon-card.html",
      "systems/genemon/templates/parts/shared/ffg-tabs.html",
      "systems/genemon/templates/parts/actor/ffg-healingitem.html"
    ];

    return loadTemplates(templatePaths);
  }
}
