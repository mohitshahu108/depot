import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "selection" , "additionalFields" ]

  connect() {
    this.showAdditionalFields()
  }

  showAdditionalFields() {
    let selectedType = this.selectionTarget.value

    for (let fields of this.additionalFieldsTargets) {
      fields.disabled = fields.hidden = (fields.dataset.type !== selectedType)
    }
  }
}