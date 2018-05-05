
/* ========================================================================== */
/* CHECK                                                                      */
/* ========================================================================== */

if(!THREE || !THREE.Vector3) {
    throw new Error("three.js must be loaded first.")
}

if(!CANNON || !CANNON.Vec3) {
    throw new Error("three.js must be loaded first.")
}

/* ========================================================================== */
/* INITIALISE                                                                 */
/* ========================================================================== */

function V3(x, y, z) {
	if(x === undefined || x.x === undefined) { // CANNON & THREE
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    } else { // HELPER
        this.x = x.x;
        this.y = x.y;
        this.z = x.z;
	}
}

/* ========================================================================== */
/* REPLACE: THREE                                                             */
/* ========================================================================== */

/* THREE - Properties */

V3.prototype.isVector3 = THREE.Vector3.prototype.isVector3;

/* THREE - ??? */

V3.prototype.equals = THREE.Vector3.prototype.equals;

V3.prototype.setScalar = THREE.Vector3.prototype.setScalar;

V3.prototype.setX = THREE.Vector3.prototype.setX;
V3.prototype.setY = THREE.Vector3.prototype.setY;
V3.prototype.setZ = THREE.Vector3.prototype.setZ;

V3.prototype.setComponent = THREE.Vector3.prototype.setComponent;
V3.prototype.getComponent = THREE.Vector3.prototype.getComponent;
V3.prototype.copy = THREE.Vector3.prototype.copy;

V3.prototype.addScalar = THREE.Vector3.prototype.addScalar;
V3.prototype.addVectors = THREE.Vector3.prototype.addVectors;

V3.prototype.add = THREE.Vector3.prototype.add;
V3.prototype.sub = THREE.Vector3.prototype.sub;
V3.prototype.multiply = THREE.Vector3.prototype.multiply;

V3.prototype.projectOnVector = THREE.Vector3.prototype.projectOnVector;
V3.prototype.projectOnPlane = THREE.Vector3.prototype.projectOnPlane; // uses THREE.Vector3 instance internally/
V3.prototype.reflect = THREE.Vector3.prototype.reflect; // uses THREE.Vector3 instance internally/
V3.prototype.angleTo = THREE.Vector3.prototype.angleTo;

V3.prototype.manhattanLength = THREE.Vector3.prototype.manhattanLength;
V3.prototype.distanceToSquared = THREE.Vector3.prototype.distanceToSquared;
V3.prototype.manhattanDistanceTo = THREE.Vector3.prototype.manhattanDistanceTo;

/* THREE - Mutators. Cont */

V3.prototype.multiplyScalar = THREE.Vector3.prototype.multiplyScalar;
V3.prototype.multiplyVectors = THREE.Vector3.prototype.multiplyVectors;
V3.prototype.subScalar = THREE.Vector3.prototype.subScalar;
V3.prototype.subVectors = THREE.Vector3.prototype.subVectors;

V3.prototype.min = THREE.Vector3.prototype.min;
V3.prototype.max = THREE.Vector3.prototype.max;
V3.prototype.clamp = THREE.Vector3.prototype.clamp;
V3.prototype.clampScalar = THREE.Vector3.prototype.clampScalar; // Sets two THREE.Vector3's and passes them to THREE.Vector3.clamp
V3.prototype.clampLength = THREE.Vector3.prototype.clampLength;
V3.prototype.floor = THREE.Vector3.prototype.floor;
V3.prototype.ceil = THREE.Vector3.prototype.ceil;
V3.prototype.round = THREE.Vector3.prototype.round;
V3.prototype.roundToZero = THREE.Vector3.prototype.roundToZero;

V3.prototype.transformDirection = THREE.Vector3.prototype.transformDirection;
V3.prototype.divide = THREE.Vector3.prototype.divide;
V3.prototype.divideScalar = THREE.Vector3.prototype.divideScalar;
V3.prototype.lerpVectors = THREE.Vector3.prototype.lerpVectors;
V3.prototype.crossVectors = THREE.Vector3.prototype.crossVectors;

V3.prototype.fromBufferAttribute = THREE.Vector3.prototype.fromBufferAttribute;

V3.prototype.setLength = THREE.Vector3.prototype.setLength;

/* THREE - Inter-class */

V3.prototype.applyMatrix3 = THREE.Vector3.prototype.applyMatrix3;
V3.prototype.applyMatrix4 = THREE.Vector3.prototype.applyMatrix4;
V3.prototype.applyQuaternion = THREE.Vector3.prototype.applyQuaternion;

V3.prototype.setFromSpherical = THREE.Vector3.prototype.setFromSpherical;
V3.prototype.setFromCylindrical = THREE.Vector3.prototype.setFromCylindrical;

V3.prototype.setFromMatrixPosition = THREE.Vector3.prototype.setFromMatrixPosition;
V3.prototype.setFromMatrixScale = THREE.Vector3.prototype.setFromMatrixScale;
V3.prototype.setFromMatrixColumn = THREE.Vector3.prototype.setFromMatrixColumn;
V3.prototype.fromArray = THREE.Vector3.prototype.fromArray;

V3.prototype.applyEuler = THREE.Vector3.prototype.applyEuler; // uses instance of THREE.Quaternion internally.
V3.prototype.applyAxisAngle = THREE.Vector3.prototype.applyAxisAngle; // uses instance of THREE.Quaternion internally.
V3.prototype.project = THREE.Vector3.prototype.project; // uses instance of THREE.Matrix4 internally.
V3.prototype.unproject = THREE.Vector3.prototype.unproject; // uses instance of THREE.Matrix4 internally.

/* ========================================================================== */
/* REPLACE: CANNON                                                            */
/* ========================================================================== */

V3.ZERO = new V3(0, 0, 0);
V3.UNIT_X = new V3(1, 0, 0);
V3.UNIT_Y = new V3(0, 1, 0);
V3.UNIT_Z = new V3(0, 0, 1);

V3.prototype.setZero = CANNON.Vec3.prototype.setZero;
V3.prototype.isZero = CANNON.Vec3.prototype.isZero;
V3.prototype.toString = CANNON.Vec3.prototype.toString;
V3.prototype.almostEquals = CANNON.Vec3.prototype.almostEquals;
V3.prototype.almostZero = CANNON.Vec3.prototype.almostZero;
V3.prototype.isAntiparallelTo = CANNON.Vec3.prototype.isAntiparallelTo;

V3.prototype.tangents = CANNON.Vec3.prototype.tangents;
V3.prototype.crossmat = CANNON.Vec3.prototype.crossmat; // Returns a new CANNON.Mat3

V3.prototype.lengthSquared = THREE.Vector3.prototype.lengthSq;
V3.prototype.norm = THREE.Vector3.prototype.length;
V3.prototype.norm2 = THREE.Vector3.prototype.lengthSq;
V3.prototype.distanceSquared = THREE.Vector3.prototype.distanceToSquared;

/* Return new */

V3.prototype.mult = function(scalar,target){
    target = target || new V3();
    target.x = scalar * this.x;
    target.y = scalar * this.y;
    target.z = scalar * this.z;
    return target;
};

V3.prototype.scale = V3.prototype.mult;

V3.prototype.vadd = function(v,target){
    target = target || new V3();
    target.x = v.x + this.x;
    target.y = v.y + this.y;
    target.z = v.z + this.z;
};

V3.prototype.vsub = function(v,target){
    target = target || new V3();
    target.x = this.x - v.x;
    target.y = this.y - v.y;
    target.z = this.z - v.z;
};

V3.prototype.vmul = function(vector, target){
    target = target || new V3();
    target.x = vector.x * this.x;
    target.y = vector.y * this.y;
    target.z = vector.z * this.z;
    return target;
};

V3.prototype.unit = function(target){
    target = target || new V3();
    let length = target.length();
    if(length > 0) {
        target.multiplyScalar(1.0 / length)
    } else {
        target.set(1, 0, 0);
    }
    return target;
};

/* ========================================================================== */
/* REPLACE: THREE & CANNON - CONFLICTS                                        */
/* ========================================================================== */

/* same behavior */

V3.prototype.set = THREE.Vector3.prototype.set;
V3.prototype.dot = THREE.Vector3.prototype.dot;
V3.prototype.length = THREE.Vector3.prototype.length;
V3.prototype.lengthSq = THREE.Vector3.prototype.lengthSq;
V3.prototype.distanceTo = THREE.Vector3.prototype.distanceTo;
V3.prototype.toArray = THREE.Vector3.prototype.toArray;

V3.prototype.clone = function(){
    return new V3(this.x, this.y, this.z);
};

/* conflicting behavior */

V3.prototype.addScaledVector = function(a, b, target) { // not ambiguous because a & b are swapped.
    if(a.x === undefined) { // CANNON
        let target = target || new V3();
        target.x = this.x + b.x * a;
        target.y = this.y + b.y * a;
        target.z = this.z + b.z * a;
        return target;
    } else { // THREE
        this.x += a.x * b;
        this.y += a.y * b;
        this.z += a.z * b;
        return this;
    }
};

V3.prototype.lerp = function (vector, alpha, target, useThreeBehavior = true) {
    console.log(new Error("lerp() is ambiguous, defaulting to THREE behavior"));
    if(useThreeBehavior && !target) { // THREE
        this.x += (vector.x - this.x) * alpha;
        this.y += (vector.y - this.y) * alpha;
        this.z += (vector.z - this.z) * alpha;
        return this;
    } else { // CANNON
        target.x = this.x + (vector.x - this.x) * alpha;
        target.y = this.y + (vector.y - this.y) * alpha;
        target.z = this.z + (vector.z - this.z) * alpha;
        return undefined;
    }
};

V3.prototype.negate = function (target, useThreeBehavior = true) {
    console.log(new Error("negate() is ambiguous, defaulting to THREE behavior"));
    if(useThreeBehavior && !target) { // THREE
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    } else { // CANNON
        target = target || new Vec3(); // always true... could cause errors
        target.x = -this.x;
        target.y = -this.y;
        target.z = -this.z;
        return target;
    }
};

V3.prototype.normalize = function(useThreeBehavior = true) {
	console.log(new Error("normalise() is ambiguous, defaulting to THREE behavior"));
    if(useThreeBehavior) {
        return this.divideScalar(this.length() || 1);
    } else {
        let length = this.length();
        if(length > 0) {
            this.multiplyScalar(1 / length);
        } else {
            this.setZero();
        }
        return length;
    }
};

V3.prototype.cross = function(v, target, useThreeBehavior) {
    console.log(new Error("cross() is ambiguous, defaulting to THREE behavior"));
    if(useThreeBehavior && !target) {
        return this.crossVectors(this, v);
    } else {
        target = target || new V3();
        target.x = (this.y * v.z) - (this.z * v.y);
        target.y = (this.z * v.x) - (this.x * v.z);
        target.z = (this.x * v.y) - (this.y * v.x);
        return target;
    }
};

/* ========================================================================== */
/* INJECT                                                                     */
/* ========================================================================== */

THREEx = THREEx || {};

THREEx.V3 = V3;
THREE.Vector3 = V3;
CANNON.Vec3 = V3;