import assert from 'node:assert/strict';
import {characters,questions,rank,profileFor,explanations} from './dist/data.js';
assert.equal(characters.length,22);assert.equal(questions.length,12);assert.equal(new Set(characters.map(c=>c.id)).size,22);
for(const c of characters){const a=questions.map(q=>c.profile[q.axis]);assert.equal(rank(a)[0].character.id,c.id,`Archetypal answers must produce ${c.id}`);assert.equal(rank(a)[0].distance,0);assert.equal(explanations(a,c).length,3);}
let counts=Object.fromEntries(characters.map(c=>[c.id,0])),seed=98765;
function random(){seed=seed*16807%2147483647;return seed/2147483647;}
for(let i=0;i<60000;i++){let a=questions.map(()=>Math.floor(random()*4));const r=rank(a);counts[r[0].character.id]++;assert.deepEqual(rank(a),r);assert.ok(r.every(x=>Number.isFinite(x.distance)));}
assert.ok(Object.values(counts).every(n=>n>0));
// A disciplined, analytical, controlled and independent pattern cannot match a support-first profile.
let precise=questions.map(q=>[3,3,0,0,2,2,3][q.axis]);assert.equal(rank(precise)[0].character.id,'neji');
let practice=questions.map(q=>[0,3,0,2,3,1,1][q.axis]);assert.equal(rank(practice)[0].character.id,'lee');
// Re-answering earlier questions must replace, not accumulate, profile evidence.
let a=Array(12).fill(0);a[0]=3;assert.equal(profileFor(a)[0],1.5);a[0]=0;assert.equal(profileFor(a)[0],0);
console.log('PASS: 22 archetypes, all 22 reachable, 60,000 deterministic answer sets, Neji / Lee sanity cases and answer replacement.');console.log(counts);
