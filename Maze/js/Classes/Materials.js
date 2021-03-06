var WallMaterial = function(scene) {
	var wallMaterial = new BABYLON.StandardMaterial('wallMaterial', scene);
	//wallMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
	wallMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
	wallMaterial.diffuseTexture = new BABYLON.Texture('img/Grill9.jpg', scene);
	wallMaterial.diffuseTexture.uScale = 2.5;
	wallMaterial.diffuseTexture.vScale = 2.5;
	wallMaterial.bumpTexture = new BABYLON.Texture('img/Grill9_normal.png', scene);
	wallMaterial.bumpTexture.uScale = 2.5;
	wallMaterial.bumpTexture.vScale = 2.5;
	wallMaterial.bumpTexture.level = 0.5;
	return wallMaterial;
};

var ExitMaterial = function(scene) {
	var exitMaterial = new BABYLON.StandardMaterial('exitMaterial', scene);
	exitMaterial.diffuseTexture = new BABYLON.Texture('img/panel_render.jpg', scene);
	exitMaterial.diffuseTexture.uScale = 5;
	exitMaterial.diffuseTexture.vScale = 5;
	exitMaterial.bumpTexture = new BABYLON.Texture('img/panel_render_normal.png', scene);
	exitMaterial.bumpTexture.uScale = 5;
	exitMaterial.bumpTexture.vScale = 5;
	exitMaterial.bumpTexture.level = 1;
	exitMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
	return exitMaterial;
};

var ExitPortalMaterial = function(scene) {
	var exitMaterial = new BABYLON.StandardMaterial('exitMaterial', scene);
	exitMaterial.bumpTexture = new BABYLON.Texture('img/circles_normal.png', scene);
	exitMaterial.bumpTexture.level = 0.7;
	exitMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
	exitMaterial.emissiveColor = new BABYLON.Color3(0.8, 0.1, 0.8);
	exitMaterial.specularColor = new BABYLON.Color3(1, 0.5, 1);
	exitMaterial.alpha = 0.7;
	return exitMaterial;
};

var EnemyMaterial = function(scene) {
	var enemyMaterial = new BABYLON.StandardMaterial('enemyMaterial', scene);
	//enemyMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
	enemyMaterial.diffuseTexture = new BABYLON.Texture('img/white_tiles.png', scene);
	enemyMaterial.specularColor = new BABYLON.Color3(0.5, 0, 0);
	enemyMaterial.bumpTexture = new BABYLON.Texture('img/white_tiles_normal.png', scene);
	enemyMaterial.bumpTexture.level = 0.7;
	return enemyMaterial
};

var EnemyEyeMaterial = function(scene) {
	var enemyMaterial = new BABYLON.StandardMaterial('enemyEyeMaterial', scene);
	enemyMaterial.bumpTexture = new BABYLON.Texture('img/circles_normal.png', scene);
	enemyMaterial.specularColor = new BABYLON.Color3(0.5, 0, 0);
	enemyMaterial.emissiveColor = new BABYLON.Color3(0.7, 0, 0);
	enemyMaterial.diffuseColor = new BABYLON.Color3(0.3, 0, 0);
	return enemyMaterial
};

var HealthBarMaterialFull = function(scene) {
	var healthBarMaterial = new BABYLON.StandardMaterial("healthBarFullMaterial", scene);
	healthBarMaterial.diffuseColor = BABYLON.Color3.Green();
	healthBarMaterial.emissiveColor = BABYLON.Color3.Green();
	healthBarMaterial.backFaceCulling = false;
	return healthBarMaterial;
};

var HealthBarMaterialDamaged = function(scene) {
	var healthBarMaterial = new BABYLON.StandardMaterial("healthBarDamagedMaterial", scene);
	healthBarMaterial.diffuseColor = BABYLON.Color3.Yellow();
	healthBarMaterial.emissiveColor = BABYLON.Color3.Yellow();
	healthBarMaterial.backFaceCulling = false;
	return healthBarMaterial;
};

var HealthBarMaterialCritical = function(scene) {
	var healthBarMaterial = new BABYLON.StandardMaterial("healthBarCriticalMaterial", scene);
	healthBarMaterial.diffuseColor = BABYLON.Color3.Red();
	healthBarMaterial.emissiveColor = BABYLON.Color3.Red();
	healthBarMaterial.backFaceCulling = false;
	return healthBarMaterial;
};

var HealthBarContainerMaterial = function(scene) {
	var healthBarContainerMaterial = new BABYLON.StandardMaterial("healthBarContainerMaterial", scene);
	healthBarContainerMaterial.diffuseColor = BABYLON.Color3.Blue();
	healthBarContainerMaterial.backFaceCulling = false;
	return healthBarContainerMaterial;
};

var MazeMapMaterial = function(scene) {
	// xray material
	var xray_mat = new BABYLON.StandardMaterial("xray", scene);
	xray_mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
	xray_mat.alpha = 0.3;
	var fresnel_params = new BABYLON.FresnelParameters();
	fresnel_params.isEnabled = true;
	fresnel_params.leftColor = new BABYLON.Color3(0.5, 0.6, 1);
	fresnel_params.rightColor = new BABYLON.Color3(0, 0, 0);
	fresnel_params.power = 2;
	fresnel_params.bias = 0.1;
	var fresnel_params2 = new BABYLON.FresnelParameters();
	fresnel_params2.isEnabled = true;
	fresnel_params2.leftColor = new BABYLON.Color3(1, 1, 1);
	fresnel_params2.rightColor = new BABYLON.Color3(0.2, 0.2, 0.2);
	fresnel_params2.power = 2;
	fresnel_params2.bias = 0.5;
	xray_mat.emissiveFresnelParameters = fresnel_params;
	xray_mat.opacityFresnelParameters = fresnel_params2;

	return xray_mat;
};

var BoxEdgeMaterial = function(scene) {
	var boxEdgeMaterial = new BABYLON.StandardMaterial("boxEdgeMaterial", scene);
	boxEdgeMaterial.diffuseColor = BABYLON.Color3.Black();
	boxEdgeMaterial.emissiveColor = BABYLON.Color3.Black();
	return boxEdgeMaterial;
};

var TerminalScreenMaterial = function(scene) {
	var screenTexture = new BABYLON.DynamicTexture("screenTexture", 512, scene, true);
	var screenMaterial = new BABYLON.StandardMaterial("screenMaterial", scene);
	screenMaterial.diffuseTexture = screenTexture;
	screenMaterial.emissiveTexture = screenTexture;
	screenMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
	return screenMaterial;
};

var TerminalCaseMaterial = function(scene) {
	var caseMaterial = new BABYLON.StandardMaterial("terminalCaseMaterial", scene);
	caseMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
	caseMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
	caseMaterial.emissiveColor = new BABYLON.Color3(0, 0.01, 0);
	return caseMaterial;
};

var CannonMaterial = function(scene) {
	var cannonMaterial = new BABYLON.StandardMaterial("bulletMaterial", scene);
	cannonMaterial.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
	//cannonMaterial.emissiveColor = new BABYLON.Color3(0.1, 0.1, 0.1);
	return cannonMaterial;
};

var BlueBulletMaterial = function(scene) {
	var bulletMaterial = new BABYLON.StandardMaterial("bulletMaterial", scene);
	bulletMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 1);
	bulletMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.5);
	bulletMaterial.emissiveColor = new BABYLON.Color3(0, 0.01, 1);
	return bulletMaterial;
};

var BrightBlueBulletMaterial = function(scene) {
	var bulletMaterial = new BABYLON.StandardMaterial("bulletMaterial", scene);
	bulletMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 1);
	bulletMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.5);
	bulletMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.5, 1);
	bulletMaterial.alpha = 0.9;
	return bulletMaterial;
};

var RedBulletMaterial = function(scene) {
	var bulletMaterial = new BABYLON.StandardMaterial("bulletMaterial", scene);
	bulletMaterial.diffuseColor = new BABYLON.Color3(1, 0.2, 0.2);
	bulletMaterial.specularColor = new BABYLON.Color3(0.5, 0.1, 0.1);
	bulletMaterial.emissiveColor = new BABYLON.Color3(1, 0.01, 0);
	return bulletMaterial;
};

var BrightRedBulletMaterial = function(scene) {
	var bulletMaterial = new BABYLON.StandardMaterial("bulletMaterial", scene);
	bulletMaterial.diffuseColor = new BABYLON.Color3(1, 0.2, 0.2);
	bulletMaterial.specularColor = new BABYLON.Color3(0.5, 0.1, 0.1);
	bulletMaterial.emissiveColor = new BABYLON.Color3(1, 0.5, 0.5);
	bulletMaterial.alpha = 0.9;
	return bulletMaterial;
};

var RocketMaterial = function(scene) {
	var rocketMaterial = new BABYLON.StandardMaterial("rocketMaterial", scene);
	rocketMaterial.diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
	rocketMaterial.specularColor = new BABYLON.Color3(0.8, 0.8, 0.8);
	rocketMaterial.emissiveColor = new BABYLON.Color3(0.01, 0.01, 0.01);
	return rocketMaterial;
};

var EnergyBarMaterial = function(scene) {
	var energyBarMaterial = new BABYLON.StandardMaterial("energyBarMaterial", scene);
	energyBarMaterial.diffuseColor = new BABYLON.Color3(0.3, 0.2, 1);
	energyBarMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.5);
	energyBarMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.5, 1);
	energyBarMaterial.alpha = 0.7;
	return energyBarMaterial;
};

var HealthBarMaterial = function(scene) {
	var healthBarMaterial = new BABYLON.StandardMaterial("healthBarMaterial", scene);
	healthBarMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
	healthBarMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
	healthBarMaterial.emissiveColor = new BABYLON.Color3(0.5, 0.1, 0.1);
	healthBarMaterial.alpha = 0.7;
	return healthBarMaterial;
};

var FireMaterial = function(scene) {
	var fireMaterial = new BABYLON.StandardMaterial("fire", scene);
	var fireTexture = new BABYLON.FireProceduralTexture("fire", 256, scene);
	fireMaterial.specularColor = BABYLON.Color3.Black();
	fireMaterial.diffuseTexture = fireTexture;
	fireMaterial.opacityTexture = fireTexture;
	fireMaterial.emissiveTexture = fireTexture;

	fireMaterial.emissiveFresnelParameters = new BABYLON.FresnelParameters();
	fireMaterial.emissiveFresnelParameters.bias = 0.2;
	fireMaterial.emissiveFresnelParameters.leftColor = BABYLON.Color3.Black();
	fireMaterial.emissiveFresnelParameters.rightColor = BABYLON.Color3.White();

	return fireMaterial;
};

var BulletHoleMaterial = function(scene) {
	var decalMaterial = new BABYLON.StandardMaterial("decalMat", scene);
	decalMaterial.diffuseTexture = new BABYLON.Texture("img/bullethole.png", scene);
	decalMaterial.diffuseTexture.hasAlpha = true;
	decalMaterial.bumpTexture = new BABYLON.Texture("img/bullethole_normal.png", scene);
	decalMaterial.bumpTexture.hasAlpha = true;
	decalMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
	decalMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	decalMaterial.emissiveColor = new BABYLON.Color3(0.08, 0.08, 0.08);
	decalMaterial.zOffset = -2;
	return decalMaterial;
};

var ExplosionDecalMaterial = function(scene) {
	var decalMaterial = new BABYLON.StandardMaterial("decalMat", scene);
	decalMaterial.diffuseTexture = new BABYLON.Texture("img/explosion_decal.png", scene);
	decalMaterial.diffuseTexture.hasAlpha = true;
	decalMaterial.bumpTexture = new BABYLON.Texture("img/explosion_decal_normal.png", scene);
	decalMaterial.bumpTexture.hasAlpha = true;
	decalMaterial.opacityTexture = new BABYLON.Texture("img/explosion_decal.png", scene);
	decalMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	decalMaterial.emissiveColor = new BABYLON.Color3(0.05, 0.05, 0.05);
	decalMaterial.zOffset = -3;
	return decalMaterial;
}