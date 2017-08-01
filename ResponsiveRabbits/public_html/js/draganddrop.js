/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2012, 2016 Oracle and/or its affiliates. All rights reserved.
 *
 * Oracle and Java are registered trademarks of Oracle and/or its affiliates.
 * Other names may be trademarks of their respective owners.
 *
 * The contents of this file are subject to the terms of either the GNU
 * General Public License Version 2 only ("GPL") or the Common
 * Development and Distribution License("CDDL") (collectively, the
 * "License"). You may not use this file except in compliance with the
 * License. You can obtain a copy of the License at
 * http://www.netbeans.org/cddl-gplv2.html
 * or nbbuild/licenses/CDDL-GPL-2-CP. See the License for the
 * specific language governing permissions and limitations under the
 * License.  When distributing the software, include this License Header
 * Notice in each file and include the License file at
 * nbbuild/licenses/CDDL-GPL-2-CP.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the GPL Version 2 section of the License file that
 * accompanied this code. If applicable, add the following below the
 * License Header, with the fields enclosed by brackets [] replaced by
 * your own identifying information:
 * "Portions Copyrighted [year] [name of copyright owner]"
 *
 * If you wish your version of this file to be governed by only the CDDL
 * or only the GPL Version 2, indicate your decision by adding
 * "[Contributor] elects to include this software in this distribution
 * under the [CDDL or GPL Version 2] license." If you do not indicate a
 * single choice of license, a recipient has the option to distribute
 * your version of this file under either the CDDL, the GPL Version 2 or
 * to extend the choice of license to its licensees as provided above.
 * However, if you add GPL Version 2 code and therefore, elected the GPL
 * Version 2 license, then the option applies only if the new code is
 * made subject to such option by the copyright holder.
 * iuyiuyiuyiuyiuyiuyi
 * Contributor(s):
 */
var orig_draganddrop="";
var orig_div1 = "";
var orig_rabbit1 = "";

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("pets", ev.target.id);
}

function drop(ev)
{
    orig_draganddrop = document.getElementById('DandD_div').innerHTML;

    ev.preventDefault();
    var data = ev.dataTransfer.getData("pets");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById('drop1').setAttribute("src","img/cute_rabbit1.jpg");
    document.getElementById('drop1').setAttribute("width","300");
    document.getElementById('drop1').setAttribute("height","200");

    document.getElementById("div1").setAttribute('width',"300");
    document.getElementById("div1").setAttribute('height',"200");

    document.getElementById('draganddrop').innerHTML="Well, Hello There! <br/><a id='resetBtn' class='btn' onclick='reset()' href='#'>Reset</a>";
    document.getElementById('drag1').style.display='none';
}

function reset(){
    document.getElementById("DandD_div").innerHTML = orig_draganddrop;
}

