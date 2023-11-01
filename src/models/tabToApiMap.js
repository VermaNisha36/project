export const tabToApiMap = (previousData) => ({
      Board: `https://merp.intermesh.net/index.php/NSDDashboard/ProductListing?glid=${previousData.glid}&empid=${previousData.empid}&page_index=${previousData.pageIndex}&type=board&AK=${previousData.AK}&build_version=${previousData.buildVersion}&version_code=${previousData.version_code}&os=${previousData.os}&platform=${previousData.platform}&vertical_id=${previousData.verticalId}`,
      Location: `https://merp.intermesh.net/index.php/NSDDashboard/ProductListing?glid=${previousData.glid}&empid=${previousData.empid}&page_index=${previousData.pageIndex}&type=location&AK=${previousData.AK}&build_version=${previousData.buildVersion}&version_code=${previousData.version_code}&os=${previousData.os}&platform=${previousData.platform}&vertical_id=${previousData.verticalId}`,
      Products: `https://merp.intermesh.net/index.php/NSDDashboard/ProductListing?glid=${previousData.glid}&empid=${previousData.empid}&type=product&AK=${previousData.AK}&build_version=${previousData.buildVersion}&version_code=${previousData.version_code}&os=${previousData.os}&platform=${previousData.platform}&vertical_id=${previousData.verticalId}`,
      PurchaseBill: `https://merp.intermesh.net/index.php/NSDDashboard/ProductListing?glid=${previousData.glid}&empid=${previousData.empid}&type=bill&AK=${previousData.AK}&build_version=${previousData.buildVersion}&version_code=${previousData.version_code}&os=${previousData.os}&platform=${previousData.platform}&vertical_id=${previousData.verticalId}`,
      VC: `https://merp.intermesh.net/index.php/NSDDashboard/ProductListing?glid=${previousData.glid}&empid=${previousData.empid}&type=vc&AK=${previousData.AK}&build_version=${previousData.buildVersion}&version_code=${previousData.version_code}&os=${previousData.os}&platform=${previousData.platform}&vertical_id=${previousData.verticalId}`,
});
  
export const tabNames = ['Board', 'Location', 'Products', 'PurchaseBill', 'VC'];

