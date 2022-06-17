import { your_contribute_type } from "your-extension-protocol/src/contribute/your-contribute-type"
import { getContribute as getContributeMeta3D } from "meta3d-type"
import { dependentExtensionNameMap, dependentContributeNameMap } from "your-protocol"

export let getContribute: getContributeMeta3D<dependentExtensionNameMap, dependentContributeNameMap, your_contribute_type> = (api, dependentMapData) => {
	return {
		TODO
	}
}
